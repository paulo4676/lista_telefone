// * importa o express *//
const express = require("express")

// * define em app uma instancia de express *
const app = express();

// * atribui a constante handlebars as caracteristicas da express-handlebars//
const handlebars = require("express-handlebars")

// * atribui a constabte budyparser as caracteristicas da body-parser//
const bodyParser = require("body-parser")
// * importa o metodo Post criaod na pasta models *
const Post = require('./models/Post');

// hadlebars config
app.engine('handlebars', handlebars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')
//

//body-parserconfig
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// rotas

// * rota para  a pasta raiz no caso a tela de cadastro *
app.get("/", function (req, res) {
    res.render('layouts/formulario') //local da pasta /views/layouts/formularios.handlebars
})

// * rota para a tela de consulta de contatos *
app.get("/consulta", function (req, res) {
    Post
        .findAll()
        .then(function (Posts) {
            res.render('layouts/consulta', {Posts: Posts}); //local da pasta /views/layouts/consultas.handlebars
        })
})

// * metodo post utilizado para passar informaçoes entre formularios *
app.post("/add", function (req, res) {
    Post
        .create(
            {Nome: req.body.pessoaNome, Email: req.body.pessoaEmail, Telefone: req.body.pessoaTelefone, Residencial: req.body.pessoaResidencial, Comercial: req.body.pessoaComercial}
        )
        .then(function () {
            res.redirect("consulta")
        })
        .catch(function (erro) {
            res.send("ocorreu um erro" + erro)
        })

    })

// * nao codifique abaixo desse codigo *
app.listen(8081, function () {
    console.log("sevidor ativo na url: localhost:8081")
});
// ---------------------------------------------------------------------------
// ----------------------------------//