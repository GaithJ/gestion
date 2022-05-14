const mysql= require('mysql');
const db=mysql.createConnection({
    host: '127.0.0.1',
    database: 'gestion',
    user: 'root',
    password:'',
    port: '3306'

}) 
db.connect(()=>{
    console.log('database connected ' )
})
module.exports = db;