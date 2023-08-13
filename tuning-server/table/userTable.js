const AWS = require("aws-sdk");

AWS.config.update({ region: "us-east-1" }); // Replace with your AWS region

const dynamodb = new AWS.DynamoDB();

const params = {
  TableName: "Users", // Table name
  KeySchema: [
    { AttributeName: "email", KeyType: "HASH" }, // Partition key
  ],
  AttributeDefinitions: [
    { AttributeName: "email", AttributeType: "S" }, // String data type
  ],
  ProvisionedThroughput: {
    ReadCapacityUnits: 5, // Adjust based on your expected read traffic
    WriteCapacityUnits: 5, // Adjust based on your expected write traffic
  },
};

dynamodb.createTable(params, (err, data) => {
  if (err) {
    console.error("Error creating table:", err);
  } else {
    console.log("Table created successfully:", data);
  }
});
