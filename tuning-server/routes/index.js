const authRoutes = require("./auth.route");

const routes = (app) => {
    app.use("/api/v1/auth", authRoutes);
}


module.exports = routes;