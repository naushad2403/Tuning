// Create Comments table


const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-east-1' }); // Set your desired AWS region

const dynamodb = new AWS.DynamoDB();
const reasonsTableParams = {
    TableName: 'Reasons',
    KeySchema: [
      { AttributeName: 'CommentId', KeyType: 'HASH' }, // CommentId as partition key
      { AttributeName: 'IssueId', KeyType: 'RANGE' } // IssueId as sort key
    ],
    AttributeDefinitions: [
      { AttributeName: 'CommentId', AttributeType: 'S' }, // CommentId attribute type
      { AttributeName: 'IssueId', AttributeType: 'S' } // IssueId attribute type
    ],
    ProvisionedThroughput: {
      ReadCapacityUnits: 5,
      WriteCapacityUnits: 5
    }
  };

    // Create the Issues table
    dynamodb.createTable(reasonsTableParams, (err, data) => {
        if (err) console.error('Error creating Issues table:', err);
        else console.log('Reasons table created successfully:', data);
      });