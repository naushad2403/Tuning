const express = require("express");
const router = express.Router();
const aws = require("aws-sdk");

const USER_POOL_ID = process.env.USER_POOL_ID; // Replace with your User Pool ID
const CLIENT_ID = process.env.CLIENT_ID; // Replace with your App Client ID
const JWT_SECRET = process.env.JWT_SECRET;
/**
 * Create issue
 */
router.post("/create", (req, res) => {
  const requiredFields = ["username", "content", "reason", "showName"];
  const undefinedFields = [];

  requiredFields.forEach((field) => {
    if (req.body[field] === undefined) {
      undefinedFields.push(field);
    }
  });

  if (undefinedFields.length > 0) {
    return res.status(400).json({ error: "Missing fields", undefinedFields });
  }
  const { username, content, reason, showName } = req.body;
  // Define the parameters for the item you want to add
  const params = {
    TableName: "Issues", // Replace 'Issues' with your actual table name
    Item: {
      User: { S: username },
      content: { S: content },
      creator: { S: showName ? req.username : "anonymous" },
      supportReason: {
        L: [
          {
            M: {
              User: { S: req.username }, // Use username here
              reason: { S: reason },
            },
          },
        ],
      },
    },
  };

  // Use the putItem method to add the item to the DynamoDB table
  // Use the putItem method to add the item to the DynamoDB table
  dynamodb.putItem(params, (err, data) => {
    if (err) {
      console.error("Error adding item:", err);
      return res.status(500).json({ error: err });
    } else {
      console.log("Item added successfully:", data);
      return res
        .status(200)
        .json({ message: "Item added successfully to the database", data });
    }
  });
});

/**
 * Get Issue by username
 */
router.get("/:username", (req, res) => {
  const usernameToQuery = req.params.username;
  const pageSize = parseInt(req.query.pageSize) || 10;
  const lastEvaluatedIssueId = req.query.lastEvaluatedIssueId; // Add this line to get the last evaluated IssueId from query parameter

  const params = {
    TableName: "Issues", // Replace 'Issues' with your actual table name
    // IndexName: "username-index", // Replace with the actual index name if applicable
    KeyConditionExpression: "User = :u",
    ExpressionAttributeValues: {
      ":u": { S: usernameToQuery },
    },
    Limit: pageSize,
    ExclusiveStartKey: lastEvaluatedIssueId
      ? {
          username: { S: usernameToQuery },
          IssueId: { S: lastEvaluatedIssueId },
        }
      : undefined,
  };

  // Use the query method to retrieve items from the DynamoDB table
  dynamodb.query(params, (err, data) => {
    if (err) {
      console.error("Error querying items:", err);
      return res
        .status(500)
        .json({ error: err });
    } else {
      console.log("Items retrieved successfully:", data.Items);
      return res
        .status(200)
        .json({
          message: "Items retrieved successfully from the database",
          data: data.Items,
          lastEvaluatedIssueId: data.LastEvaluatedKey
            ? data.LastEvaluatedKey.IssueId.S
            : null,
        });
    }
  });
});


/**
 * Get feed
 */
router.get('/', (req, res) => {
    const {numberOfIssues} = req.query;
    const pageSize = parseInt(req.query.pageSize) || 10;
    const pageCount = parseInt(req.query.pageCount) || 1;
    const issueCount = parseInt(req.query.numberOfIssues) || 3;
    res.status(200).json({msg: "Issues api working, please use /username to fetch the user issus."});
    
});

/**Get reason issue wise
 *
 */
router.get('/:issueId', (req, res) => {
    const issueId = req.params.issueId;
    const pageSize = parseInt(req.query.pageSize) || 10;
    const pageCount = parseInt(req.query.pageCount) || 1;
});

router.post("/dislike", (req, res) => {
    const { issueId, reason } = req.body;
});

router.post("/like", (req, res) => {
    const { issueId, reason } = req.body;
});

module.exports = router;
