const express = require('express')
var router = express.Router(); //interceptação das rotas

router.use(function (req, res, next){
    //Aqui implementaremos rotinas de LOGs, Validações, Autenticações...
    console.log("Ip da pessoa", req.ip); 
    next();
});


router.get('/', (req, res) => res.json({message:'Tudo certo aqui com as Rotas'}));

module.exports = router;