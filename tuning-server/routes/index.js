const authRoutes = require("./auth.route");

const routes = (app) => {
    app.use("/user", authRoutes);
}


module.exports = routes;