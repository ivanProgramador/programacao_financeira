const express = require("express");
const Venda = require("../venda/Venda");
const Produto = require("../produto/Produto");
const router = express.Router();
const Produto_venda = require("../produto_venda/Produto_venda");
const { where } = require("sequelize");

/*
Sequencia de venda 
1 - iniciar a venda(grava a venda) OK
2 - vai para a pagina de adicionar produtos OK
3 - adiciona produtos ok 
*/

router.get("/inicio",(req,res)=>{
    res.render('sequencia/inicio');
});

router.post("/venda/cadastrar",(req,res)=>{
  var{cliente}=req.body;
  Venda.create({cliente:cliente}).then(()=>{
     res.redirect('/adiciona_produto');
  });
});

router.get("/adiciona_produto",(req,res)=>{

  /*
   preciso trazer 
   Venda ok
   Produtos 
   produto vendido 
  */

   Venda.findOne({
     order:[['createdAt','DESC']]
   }).then(venda=>{

     let venda_id = venda.id;

     Produto.findAll().then(produtos=>{
        Produto_venda.findAll({where:{vendaId:venda_id},include:[{model:Produto}]}).then(produtos_vendidos=>{
        

            res.render('sequencia/adiciona_produtos',{produtos:produtos,venda:venda,produtos_vendidos});
      
        });
     });
   });
});

router.post('/produto_venda/cadastrar',async (req,res)=>{

  var{quantidade, produtoId,vendaId}= req.body;
  

 await Produto_venda.create({quantidade:quantidade,produtoId:produtoId,vendaId:vendaId}).then(()=>{

  Produto_venda.findAll({include:[{model:Produto}]}).then(produtos_vendidos=>{

   
    res.redirect("/adiciona_produto");

  });

      

  
    
  });

  

});


router.post('/fechar_venda',(req,res)=>{

  /*
   A venda possui 3 situações
   0 aberta 
   1 em andamento 
   2 fechada
  */

   var{id, situacao, valor} = req.body;

   Venda.update({situacao:situacao,valor:valor},{where:{id:id}}).then(()=>{
     res.redirect('/');
   });







});





module.exports = router;