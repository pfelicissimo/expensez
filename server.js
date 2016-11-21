// BIBLIOTECAS
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var config = require('./config/config');

// CONTROLLERS
var entradaController = require('./controllers/entrada-controller');

// CONFIGURAÇÃO
var app = express();
var PORT = process.env.PORT || 8080;
config.configure();

mongoose.connect(process.env.MONGODB_CONNECTION);

app.use(bodyParser.json());

// CONFIGURAÇÃO DAS ROTAS
app.get('/api/entrada', function(req, res){

    entradaController.find(req.query, function(err, entradas){

        if(err){
            console.error(err);
            res
                .status(500)
                .json(err);
        }else{
            res
                .status(200)
                .json(entradas);
        }

        
    });
    
});

app.post('/api/entrada', function(req, res){

    entradaController.create(req.body, function(err, entrada){

        if(err){
            console.error(err);
            res
                .status(500)
                .json(err);
        }else{
            res
                .status(200)
                .json(entrada);
        }

        
    });
    
});


// INICIALIZAÇÃO DO SERVIDOR
app.listen(PORT, function(){

   console.log('Escutando porta: '+ PORT);

});