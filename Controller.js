//constantes
const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
const model=require('./models');

//iniciar o servidor
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//Rotas

app.post('/registrar',async(req,res)=>{
    let reqs = await model.User.create({
        'stName' : req.body.stNameUser,
        'lsName' : req.body.lsNameUser,
        'email' : req.body.emailUser,
        'password' : req.body.passwordUser,
        'createdAt' : new Date(),
        'updatedAt' : new Date()
    })
    if(reqs){
        res.send(JSON.stringify('O usuário foi cadastrado com sucesso!'));
    }
});

let port = 3000;

app.listen(port,(req,res)=>{
    console.log("servidor rodando")
})