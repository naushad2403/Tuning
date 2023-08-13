const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const {
  DynamoDBDocumentClient,
} = require("@aws-sdk/lib-dynamodb");
const express = require("express");
const serverless = require("serverless-http");
const routes = require("./routes");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

routes(app);
const USERS_TABLE = process.env.USERS_TABLE;
const client = new DynamoDBClient();
const dynamoDbClient = DynamoDBDocumentClient.from(client);
module.exports.handler = serverless(app);
