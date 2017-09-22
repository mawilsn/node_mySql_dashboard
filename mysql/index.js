//import con from './db'{con};
const con = require('./db').con;
import express from 'express';

const app = express();

app.listen(4000, ()=>{
	console.log('test mysql api app listening on 4000')
});

app.get('/',(req,res)=>{
	let sql = 'SELECT * FROM main_trg_dashboard';

	con.query(sql, (err, rows, fields)=>{
		if(err){throw err};
		res.send(rows);
	})
})

app.get('/:id',(req, res)=>{
	let sql = 'SELECT * FROM main_trg_dashboard WHERE ID =' + req.params.id;

	con.query(sql, (err, rows, fields)=>{
		if(err){throw err};
		if(rows.length > 0 ){
		res.send(rows);}else{
			res.send("Admin doesn't exist!")
		}
	})
})


// function api = con.connect((err)=>{
// 	if(err)throw err;
// 	console.log(`Connected!`)
//
// 	con.query(sql, (err, results, fields)=>{
// 		if(err){throw err};
// 		var json = JSON.stringify(results)
// 		//console.log(`Length: ${json.length}, ${json()}`);
//
// 		return results;
// 	})
// })
