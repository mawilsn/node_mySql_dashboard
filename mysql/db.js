import mysql from 'mysql';
//const mysql = require('mysql');


export const con = mysql.createConnection({
  host: "localhost",
  user: "test",
  password: "Drinkh2o",
   database: "api_test" //only use after it has been created
});



// con.connect((err)=>{
// 	if(err)throw err;
// 	console.log(`Connected!`)
// 	var sql = 'SELECT * FROM customers';
// 	con.query(sql, (err, results, fields)=>{
// 		if(err){throw err};
// 		var json = JSON.stringify(results)
// 		//console.log(`Length: ${json.length}, ${json()}`);
//
// 		console.log(results[1].name);
// 	})
// })



//create table
// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   con.query("CREATE DATABASE mydb", function (err, result) {
//     if (err) throw err;
//     console.log("Database created");
//   });
// });

// //creates table
// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Table created");
//   });
//});

// //inserts record
// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("1 record inserted");
//   });
// });


//insert multiple rows
// con.connect(function(err){
// 	if(err) throw err;
// 	console.log(`Connected!`);
// 	var sql= "INSERT INTO customers(name, address) VALUES ?";
// 	var values = [
// 		['John', 'Highway 71'],
//     ['Peter', 'Lowstreet 4'],
//     ['Amy', 'Apple st 652'],
//     ['Hannah', 'Mountain 21'],
//     ['Michael', 'Valley 345'],
//     ['Sandy', 'Ocean blvd 2'],
//     ['Betty', 'Green Grass 1'],
//     ['Richard', 'Sky st 331'],
//     ['Susan', 'One way 98'],
//     ['Vicky', 'Yellow Garden 2'],
//     ['Ben', 'Park Lane 38'],
//     ['William', 'Central st 954'],
//     ['Chuck', 'Main Road 989'],
//     ['Viola', 'Sideway 1633']
// ];
// 	con.query(sql, [values], (err, result)=>{
// 		if (err) throw err;
// 		console.log(`Number of records imported: ${result.affectedRows}`)
// 	})
// })
