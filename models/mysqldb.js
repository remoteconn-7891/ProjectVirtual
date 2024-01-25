// Connecting to MySQL database
const connection = mysql.createConnection({

    host: '127.0.0.1',
    user: 'root',
    password: 'Virtualdb@87',
    database: 'userdb',
  });

  connection.connect((err, connection) => {
    if (err) throw (err);
    console.log("Database connection successful");
});
