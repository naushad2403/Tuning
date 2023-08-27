
const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-east-1' }); // Set your desired AWS region

const dynamodb = new AWS.DynamoDB();

const issuesTableParams = {
    TableName: 'Issues',
    KeySchema: [
      { AttributeName: 'IssueId', KeyType: 'HASH' } // IssueId as partition key
    ],
    AttributeDefinitions: [
      { AttributeName: 'IssueId', AttributeType: 'S' }, // IssueId attribute type
    ],
    ProvisionedThroughput: {
      ReadCapacityUnits: 5,
      WriteCapacityUnits: 5
    }
  };
  
  // Create the Issues table
  dynamodb.createTable(issuesTableParams, (err, data) => {
    if (err) console.error('Error creating Issues table:', err);
    else console.log('Issues table created successfully:', data);
  });
  



  // const issuesTableParams = {
  //   TableName: "Issues",
  //   AttributeDefinitions: [
  //     { AttributeName: "IssueId", AttributeType: "S" }, // IssueId attribute type
  //     { AttributeName: "User", AttributeType: "S" }, // User attribute type (for GSI)
  //   ],
  //   GlobalSecondaryIndexUpdates: [
  //     {
  //       Create: {
  //         IndexName: "UserIndex",
  //         KeySchema: [
  //           { AttributeName: "User", KeyType: "HASH" }, // User as partition key for GSI
  //         ],
  //         Projection: {
  //           ProjectionType: "INCLUDE",
  //           NonKeyAttributes: ["IssueId", "Title"], // Specify other attributes you want to include
  //         },
  //         ProvisionedThroughput: {
  //           ReadCapacityUnits: 5,
  //           WriteCapacityUnits: 5,
  //         },
  //       },
  //     },
  //   ],
  // };

  // // Update the Issues table to create the GSI
  // dynamodb.updateTable(issuesTableParams, (err, data) => {
  //   if (err) console.error("Error updating Issues table:", err);
  //   else console.log("Issues table updated successfully:", data);
  // });
