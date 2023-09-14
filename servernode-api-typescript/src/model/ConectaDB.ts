import mysql from 'mysql';

class ConectaDB {
  public db: mysql.Connection;

  constructor() {
    this.db = mysql.createConnection({
      host: "85.10.205.173",
      user: "rootportfolio1",
      password: "toor123@",
      database: "bancojulian1"
    });

    this.connect();
  }

  private connect(): void {
    this.db.connect((err) => {
      if (err) {
        console.error('Error connecting to the database:', err);
      } else {
        console.log('Successful database connection!');
      }
    });
  }
}

export const db = new ConectaDB().db;