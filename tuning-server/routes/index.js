const authRoutes = require("./auth.route");
const issuesRoutes = require("./Issues.route");

const routes = (app) => {
    app.use("/api/v1/auth", authRoutes);
    app.use("/api/v1/issues", issuesRoutes);
}


module.exports = routes;