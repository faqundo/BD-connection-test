var dbConnection = require('../../config/dbConnection');



module.exports = (app) => {
    const connection = dbConnection();


    app.get("/", (req, res) => {
        connection.query("SELECT * FROM news", (err, result) => {
            console.log(result);
            res.render("news/news", {
                news: result
            });
        });
    });

    
   app.post('/news', (req, res) => {
       console.log(req.body);
       let {title,news} = req.body;
       connection.query("INSERT INTO news SET?", {
           title:title, //ultimas vers de js se puede poner <algo>, es lo mismo de <algo>:<algo>,etc
           news:news
       }, (err,result) => {
           res.redirect("/");
       });
   });
};



//METODO DOCUMENTACION
/*
var mysql      = require('mysql');
var connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"klapaucius",
    database:"news_portal",
});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
  if (err) throw err;
  console.log('The solution is: ', rows[0].solution);
});

connection.end();
*/
