const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const Post = require('./models/Post')

// Config
    // Template engine
        app.engine('handlebars', function(handlebars){defaultLayout: 'main'})
        app.set('view engine', 'handlebars')
    //body-parser
        app.use(bodyParser.urlencoded({extended: false}))
        app.use(bodyParser.json())
        
// ROTAS
    app.get('/', function(req, res){
        Post.All({order: [['id', 'DESC']]}).then(function(posts){
            res.render('home', {posts: posts})
        })
    })

   app.get('/', function(req, res) {
    res.render("formulario")
})  
    app.post('/add', function(req, res){
       Post.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
       }).then(function(){
        res.redirect('/')
       }).catch(function(erro){
        res.send('Houve um erro' + erro)
       })
    })

app.listen(9890, function(req, res) {
    console.log('Servidor esta ligado')
    console.log('Para acessar ao servidor acesse http://localhost:9890')
})