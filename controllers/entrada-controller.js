var Entrada = require('../models/entradas');

module.exports.find = function(query, done){
    Entrada.find(query, done);

};

module.exports.create = function(obj, done){

    if(obj.tipo == 'D'){
        obj.valor = obj.valor * -1;
    }

    var entrada = new Entrada(obj);
    entrada.save(function(err){
        done(err, entrada);
    });

}