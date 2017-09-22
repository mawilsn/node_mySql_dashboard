import mysql from 'mysql';

 var con=mysql.createPool({

host:'localhost',
 user:'test',
 password:'Drinkh2o',
 database:'mydb'

});
con.connect((err)=>{
	if(err) throw err;
	console.log('Connected!')
})
 module.exports=connection;
