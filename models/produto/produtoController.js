const express = require("express");
const router  = express.Router();
const Produto = require("./Produto");

router.get('/produtos',(req,res)=>{
    Produto.findAll().then(produtos=>{

        res.render('produtos/cadastro',{produtos:produtos});

    })
    
});

router.post('/produto/cadastrar',(req,res)=>{

  var{nome,preco,tipo} = req.body;

  Produto.create({nome:nome,preco:preco,tipo:tipo}).then(()=>{
     res.redirect('/produtos');
  });

});

router.post('/produto/deletar',(req,res)=>{
    var {id} = req.body;
    Produto.destroy({where:{id:id}}).then(()=>{
        res.redirect('/produtos');
    });
});


module.exports = router;