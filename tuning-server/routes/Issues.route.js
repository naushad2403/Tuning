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
  const { username, content, reason, showName } = req.body;
});

/**
 * Get Issue by username
 */
router.get('/:username', (req, res) => {
    const name = req.params.username;
    const pageSize = parseInt(req.query.pageSize) || 10;
    const pageCount = parseInt(req.query.pageCount) || 1;
});

/**
 * Get feed
 */
router.get('/', (req, res) => {
    const {numberOfIssues} = req.query;
    const pageSize = parseInt(req.query.pageSize) || 10;
    const pageCount = parseInt(req.query.pageCount) || 1;
    const issueCount = parseInt(req.query.numberOfIssues) || 3;
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
