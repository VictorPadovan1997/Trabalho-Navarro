const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const Funcionario = new Schema({
    nome: {
        type: String,
        required: true
    },
    funcao: {
        type: String,
        required: true
    },
    salario: {
        type: String,
        required: true
    },
})
//
mongoose.model("funcionarios", Funcionario)