const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

const configdoc = require("./src/docs/configdoc");
configdoc(app);

require('./src/controller/UsuariosController')(app);
app.listen(PORT, ()=>{console.log(`Servidor funcionando em http://localhost:${PORT}`)});