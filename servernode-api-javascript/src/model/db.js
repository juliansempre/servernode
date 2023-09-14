import mysql from 'mysql';

export const db = mysql.createConnection({
    host: "85.10.205.173",
    user: "rootportfolio1",
    password: "toor123@",
    database: "bancojulian1"
});
// Tentar conectar ao banco de dados
db.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
    } else {
        console.log('Conexão bem-sucedida com o banco de dados!');
    }
});