const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database");

connection.authenticate().catch(err=>{
    console.log(err);
})

app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


app.get("/",(req,res)=>{

    res.send("teste");

});




app.listen(8080,()=>{
    console.log('App rodando');
})