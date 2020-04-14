//Metodo Fazt

var mysql = require("mysql");

module.exports = () =>{
    return mysql.createConnection({
        host:"localhost",
        user:"root",
        password:"",
        database:"news_portal",
        port: 3306
    });
};


