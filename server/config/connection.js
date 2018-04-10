var mysql = require('mysql');
// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: 'survey_db'
// });

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "oc_rahman",
//   password: "2en8m1oopin3k3ghefreund29dx5dm",
//   database: 'survey_db'
// });

var con = mysql.createConnection({
  host: "sql12.freemysqlhosting.net",
  user: "sql12231235", 
  password: "llLisnJqn4",
  database: 'sql12231235'
});

// con.connect(function(err) {
//         if (err)            
//         {                      
//             throw err;
//         }
//         else
//         {
//             console.log("Connected!");
//         }    
// });
exports.module=con;