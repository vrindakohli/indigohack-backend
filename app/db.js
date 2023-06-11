var mysql= require("mysql");

var connection= mysql.createConnection({
    host:'mysql',
    user:'mysql',
    password:'password',
    database:'sampledb'
})

connection.connect(function(err){
    if(!!err){
        console.log("error: ", err)
    }
    else{
        console.log("connection succesfull")
    }
})


module.exports=connection;