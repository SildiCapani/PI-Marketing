import mysql from 'mysql2'

export const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password: "sildi2004",
    database:"pi_marketing"
});

db.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + db.threadId);
  });