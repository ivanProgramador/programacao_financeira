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
app.use(express.static('public'));

//models

const Produto = require("./models/produto/Produto");
const Venda = require("./models/venda/Venda");
const Produto_venda = require("./models/produto_venda/Produto_venda");

//controllers
const produtoController = require("./models/produto/produtoController");
const sequenciaController = require("./models/sequencia/sequencia_controller");

app.get("/",(req,res)=>{res.render("index");});

app.use('/',produtoController);
app.use('/',sequenciaController);




app.listen(8080,()=>{
    console.log('App rodando');
})