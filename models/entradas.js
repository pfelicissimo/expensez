var mongoose = require('mongoose');

module.exports = mongoose.model('Entrada', {
    descricao: String,
    valor: Number,
    criacao: {
        type: Date,
        default: Date.now
    },
    paga: Boolean,
    vencimento: Date,
    tipo: {
        type: String,
        enum: ['D', 'R']
    }
});