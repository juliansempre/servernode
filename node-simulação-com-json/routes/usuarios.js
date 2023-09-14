const data = require("../data.js");

module.exports = function (app) {
  app.get("/", (req, res) => {
    res.send(data);
  });
  
  app.get("/:id", (req, res) => {
    const post = data.find((post) => post.id === +req.params.id);
    if (!post) {
      res.sendStatus(404);
    }
    res.send(post);
  });
};
