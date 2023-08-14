
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
  