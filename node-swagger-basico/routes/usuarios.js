const data = require("../data.js");

module.exports = function (app) {
  /**
   * @swagger
   * /usuario:
   *   get:
   *     tags:
   *     - Usuario
   *     description: Retorna todos os usuários
   *     produces:
   *     - application/json
   *     responses:
   *       200:
   *         description: Retorna uma lista de usuários
   *         content:
   *           application/json:
   *             schema:
   *               type: array
   *               items:
   *                 $ref: '#/schemas'
   */
  app.get("/usuario", (req, res) => {
    res.send(data);
  });
  
  /**
   * @swagger
   * /usuario/{id}:
   *   get:
   *     tags:
   *     - Usuario
   *     description: Retorna um usuário pelo ID
   *     produces:
   *     - application/json
   *     parameters:
   *        - in: path
   *          name: id
   *          description: ID do usuário
   *          required: true
   *          schema:
   *            type: integer
   *     responses:
   *       200:
   *         description: Retorna um usuário
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/schemas'
   *       404:
   *         description: Usuário não encontrado
   */
  app.get("/usuario/:id", (req, res) => {
    const post = data.find((post) => post.id === +req.params.id);
    if (!post) {
      res.sendStatus(404);
    }
    res.send(post);
  });
};
