const express = require("express");

const PORT = process.env.PORT || 3000;
const app = express();

require('./routes/usuarios')(app);
app.listen(PORT, ()=>{console.log(`Servidor funcionando em http://localhost:${PORT}`)});