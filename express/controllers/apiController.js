module.exports = function(app) {
  app.get("/api", function(req, res) {
    res.json({ name: "seham", son: "ahmed" });
  });
};
