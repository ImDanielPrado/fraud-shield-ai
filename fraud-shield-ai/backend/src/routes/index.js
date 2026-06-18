const { Router } = require("express");

const userRoutes = require("./userRoutes");

const routes = Router();

routes.get("/health", (req, res) => {
  return res.json({
    status: "ok",
    service: "Fraud Shield AI"
  });
});

routes.use("/users", userRoutes);

module.exports = routes;