const mysql = require("mysql");

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"shop_data"
})

db.connect = (err)=>{
    if (err)throw err;
    console.log("db connected");
    // db.query("SELECT eleves.id as 'eleve_id', eleves.nom as 'eleve_nom', eleves.cours_id, cours.nom as 'cours_nom', cours.date as 'cours_date' FROM eleves JOIN cours on eleves.cours_id = cours.id", function (err, result) {
    //     if (err) throw err;
    //     console.log(result);
    //   });
}
db.connect();

module.exports = db;