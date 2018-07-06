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


// 6-7-18
// var con = mysql.createConnection({
//   host: "sql12.freemysqlhosting.net",
//   user: "sql12231235", 
//   password: "llLisnJqn4",
//   database: 'sql12231235'
// });


var con = mysql.createConnection({
  host: "sql2.freesqldatabase.com",
  user: "sql2246345", 
  password: "tS3!kM7!",
  database: 'sql2246345'
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