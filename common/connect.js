const mysql = require('mysql2');

// const connection=mysql.createConnection({
//     host: "37.59.55.185",
//     user: "6oyyqaK3nK",
//     password: "u258I1KYfy",
//     database: "6oyyqaK3nK",
//     port:'3306',
// })

const pool = mysql.createPool({
    host: '37.59.55.185',
    user: '6oyyqaK3nK',
    password: "u258I1KYfy",
    database: '6oyyqaK3nK',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
  });

// connection.connect(function(err){
//     if(err){
//         console.log("Connection to MySQL error!!!");
//     }
//     else{
//         console.log("Connection to MySQL successful!!!");
//     }
// });
module.exports=pool;