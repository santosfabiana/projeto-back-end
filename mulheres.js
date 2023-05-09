const express = require("express");
const router = express.Router();

const app = express();
const porta = 3333;

const mulheres = [
    {
        nome: 'Fabiana Treza',
        imagem: '',
        minibio: 'Mamae e estudante'
    },

    {
        nome: 'Maria Julia',
        imagem: '',
        minibio: 'Vaidosa, apaixonada por maquiagem'
    },

    {
        nome: 'Maria Fernanda',
        imagem: '',
        minibio: 'Pequena princesa que ama tiktok'
    }
]

function mostraMulheres(request, response) {
    response.json(mulheres)
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta", porta);
}

app.use(router.get('/mulheres', mostraMulheres));
app.listen(porta, mostraPorta);