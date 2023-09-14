
# Api backend em typescript 

Node typescript orientado a objetos
com conexão express no mysql remoto.

npx tsc

npm install --save-dev @types/express @types/cors @types/mysql @types/node

npm start

==============================
ESTRUTURA MVC
==============================
api/
|-- dist/
|   |-- ...arquivos .js
|-- node_modules/
|-- src/
|   |-- controller/
|   |   |-- rotaController.ts
|   |-- model/
|   |   |-- db.ts
|   |   |-- userModel.ts
|   |-- index.ts
|-- view/
|-- package.json
|-- tsconfig.json
