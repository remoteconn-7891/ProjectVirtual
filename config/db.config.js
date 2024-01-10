// Connecting to MySQL database
const connection = sqlconn.createConnection({

    host: '127.0.0.1',
    user: 'root',
    password: 'VirtualDB@87',
    database: 'virtual_db',
});

connection.connect((err) => {
    if (err) throw err;
    console.log("Database connection successful");
});