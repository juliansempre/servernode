var configdoc = (app)=>{
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
        schemas: require("./schemas/schemaUsuario.json")
    }
}
var options = {
    swaggerDefinition: swaggerDefinition,
    apis: ['./src/controller/*.js']
}
var swaggerSpec = swaggerJSDoc(options);
app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));

}

module.exports = configdoc;