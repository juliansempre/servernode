const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

//Documentação
const swaggerUI = require("swagger-ui-express");
const swaggerJSDoc = require("swagger-jsdoc");

var swaggerDefinition = {
    info:{
        title: "Node Swagger",
        version: "1.0.00",
        description: "Documentação da api"
    },
    components:{
        schemas: require("./schemas.json")
    }
}
var options = {
    swaggerDefinition: swaggerDefinition,
    apis: ['./routes/*.js']
}

var swaggerSpec = swaggerJSDoc(options);
app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));





require('./routes/usuarios')(app);
app.listen(PORT, ()=>{console.log(`Servidor funcionando em http://localhost:${PORT}`)});