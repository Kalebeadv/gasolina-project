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

// função email
function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }


//Rotas
app.post('/registrar',async(req,res)=>{
    let reqs = await model.User.findAll({
        where: {
            email: req.body.emailUser,
        }
    });
    x = validateEmail(req.body.emailUser);
    if (x){
        if(reqs == ''){
            if(req.body.passwordUser == req.body.passwordConfirmUser){
                reqs = await model.User.create({
                    'stName' : req.body.stNameUser,
                    'email' : req.body.emailUser,
                    'password' : req.body.passwordUser,
                    'createdAt' : new Date(),
                    'updatedAt' : new Date()
                })
                res.send(JSON.stringify('true'));
            }else{
                res.send(JSON.stringify('Senha Divergente'));
            }
        }else{
            res.send(JSON.stringify('false'));
        }
    }else{
        res.send(JSON.stringify('Email Invalido'))
    }
    
});

app.post('/cadastrarVeiculo',async(req,res)=>{

    let id = await model.User.findAll({
        where: {
            email: req.body.emailUser,
        }
    });
    id = JSON.stringify(id, ["id"]);

    id = id.split(':');
    id = id[1]
    id = id.split("}")
    id = id[0]
    
    let reqs = await model.Vehicle.create({
        'model' : req.body.modeloVeiculo,
        'brand' : req.body.marcaVeiculo,
        'consumo' : req.body.consumoVeiculo,
        'typefuel': req.body.combustivelVeiculo,
        'year': req.body.anoVeiculo,
        'idUser' : id,
        'createdAt' : new Date(),
        'updatedAt' : new Date()
    })
    res.send(JSON.stringify('sucesso'))
});

app.post('/station',async(req,res)=>{
    let objetoGasStation = await model.Gasstation.findAll({});
    res.send(JSON.stringify(objetoGasStation));
});

app.post("/fuel",async(req,res)=>{
    let objFuel = await model.Fuel.findAll({});
    res.send(JSON.stringify(objFuel));

});


app.post('/carros',async(req,res)=>{
    let user = await model.User.findAll({
        where: {
            email: req.body.email,
        }
    })
    let id = JSON.stringify(user, ["id"]);
    id = id.split(':');
    id = id[1]
    id = id.split("}")
    id = id[0]

    let objetoCarros = await model.Vehicle.findAll({
        where: {
            idUser : id
        }
    })
    res.send(JSON.stringify(objetoCarros))
});

/*
app.post('/registrar',async(req,res)=>{
    let reqs = await model.User.create({
        'stName' : req.body.stNameUser,
        'lsName' : req.body.lsNameUser,
        'email' : req.body.emailUser,
        'password' : req.body.passwordUser,
        'createdAt' : new Date(),
        'updatedAt' : new Date()
    })

});
*/

let port = 3000;
app.listen(port,(req,res)=>{
    console.log("servidor rodando")
})