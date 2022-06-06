const atividades = require("../models/atividades")

module.exports = (app)=>{
    app.post('/atividades', async(req,res)=>{

var dados = req.body

const database = require("../config/database")()
//importar o model de atividades
const atividades = require("../models/atividades")
 //gravar informações do formulário database  
var gravar = await new atividades ({
data:dados.data,
tipo:dados.tipo,
entrega:dados.entrega,
disciplina:dados.disciplina,
instrucoes:dados.instrucoes,
usuarios:dados.id,
titulo:dados.titulo
}).save()
//buscar as atividades do usuário
var buscar = await atividades.find({usuario:dados.id})
//carregar a página de atividades
res.render('atividades.ejs', {nome:dados.nome,id:dados.id, lista:buscar})

})
app.get('/atividades',async(req,res)=>{
//listar todas as atividades do usuário logado
var user = req.query.id
var usuarios = require ('../models/usuário')
var atividades = require('../models/atividades')

var dadosUser = await usuarios.find0one({_id:user})
var dadosAtividades = await atividades.find(
    {usuario:user})

    res.render('atividades.ejs',{nome:dadosUser.nome,id:dadosUser._id,lista:dadosAtividades})
})
   app.get('/exckuir',async(res,res)=>{
   //qual o documwnto será excluido da collection atividades???
   var doc = req.query.id
   //excluir o documento
   var excluir = await atividades.findOneAndDelete({
   _id:doc
   })
   ///voltar para a lista de atividades
   //

   })
}
