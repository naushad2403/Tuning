const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const { DynamoDBDocumentClient } = require("@aws-sdk/lib-dynamodb");
const express = require("express");
const serverless = require("serverless-http");
const routes = require("./routes");
const cors = require("cors");
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger');

const app = express();
app.use(cors());
app.use(express.json());
// Define a health check endpoint
/**
 * @swagger
 * '/health':
 *   get:
 *    tags:
 *      - healthcheck
 *      description:  Respons if the app is up and running
 *      response:
 *        200:
 *          description: App is up and running
 * 
 */
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK' });
});
routes(app);

const USERS_TABLE = process.env.USERS_TABLE;
const client = new DynamoDBClient();
const dynamoDbClient = DynamoDBDocumentClient.from(client);

// Mount Swagger UI route before the serverless handler

// Mount the serverless handler last
module.exports.handler = serverless(app);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
