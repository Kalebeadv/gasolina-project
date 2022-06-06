//constantes
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const model = require('./models');
const nodemailer = require("nodemailer");
const bcrypt = require('bcryptjs');




//iniciar o servidor
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Rotas
app.post('/registrar', async (req, res) => {
    let reqs = await model.User.findAll({
        where: {
            email: req.body.emailUser,
        }
    });
    let salt = bcrypt.genSaltSync(10);
    let hash = bcrypt.hashSync(req.body.passwordUser, salt);   
    if (reqs == '') {
        reqs = await model.User.create({
            'stName': req.body.stNameUser,
            'email': req.body.emailUser,
            'password': hash,
            'createdAt': new Date(),
            'updatedAt': new Date()
        })
        res.send(JSON.stringify('true'));
    } else {
        res.send(JSON.stringify('false'));
    }
});

app.post('/cadastrarVeiculo', async (req, res) => {

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
        'model': req.body.modeloVeiculo,
        'brand': req.body.marcaVeiculo,
        'consumo': req.body.consumoVeiculo,
        'typeFuel': req.body.combustivelVeiculo,
        'year': req.body.anoVeiculo,
        'userID': id,
        'typeVehicle': req.body.typeVeh,
        'createdAt': new Date(),
        'updatedAt': new Date()
    })
    res.send(JSON.stringify('sucesso'))
});

app.post('/station', async (req, res) => {
    let objetoGasStation = await model.Gasstation.findAll({});
    res.send(JSON.stringify(objetoGasStation));
});

app.post("/fuel", async (req, res) => {
    let objFuel = await model.Fuel.findAll({});
    res.send(JSON.stringify(objFuel));

});

app.post("/rankFuel", async (req, res) => {
    
    if (req.body.combus == "todos"){
        let objFuel = await model.Fuel.findAll({
            order: [['price', 'ASC']],
            limit: 5
        });
    }else{
        let objFuel = await model.Fuel.findAll({
            where:{
                type: req.body.combus
            },
            order: [['price', 'ASC']],
            limit: 5
        });
    }
    
    res.send(JSON.stringify(objFuel));

});

app.post("/homeFuel", async (req, res) => {
    let c;
    if (req.body.combus == "undefined"){
        c = req.body.combus;
    }else{
        c = "gasolina"
    }
    let objFuel = await model.Fuel.findAll({
        where:{
            type: c
        },
    });
    res.send(JSON.stringify(objFuel));

});

app.post('/login', async (req, res) => {

    let user = await model.User.findAll({
        where: {
            email: req.body.emailUser,
        }
    })

    if (user.length > 0){
        bcrypt.compare(req.body.passwordUser, user[0].password).then((ress) => {
            res.send(JSON.stringify("sucesso")
        )});
    }else{
        console.log("falha")
        res.send(JSON.stringify("falha"))
    }
/*
    console.log(user[0].password)
    if (user.length > 0){
        console.log("sucesso")
        res.send(JSON.stringify("sucesso"))
    }else{
        console.log("falha")
        res.send(JSON.stringify("falha"))
    }
*/
})


app.post('/carros', async (req, res) => {
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
            userID: id
        }
    })
    res.send(JSON.stringify(objetoCarros))
});

app.post('/excluiCarros', async (req, res) => {
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

    b = model.Vehicle.destroy({
        where: {
            userID: id,
            id: req.body.carId
        }
    });

    let objetoCarros = await model.Vehicle.findAll({
        where: {
            userID: id
        }
    })
    res.send(JSON.stringify(objetoCarros))
});

app.post('/atualizaCarros', async (req, res) => {
    let user = await model.User.findAll({
        where: {
            email: req.body.emailUser,
        }
    })
    let id = JSON.stringify(user, ["id"]);
    id = id.split(':');
    id = id[1]
    id = id.split("}")
    id = id[0]

    b = model.Vehicle.update({
            model: req.body.modeloVeiculo,
            brand: req.body.marcaVeiculo,
            consumo: req.body.consumoVeiculo,
            typeFuel: req.body.combustivelVeiculo,
            year: req.body.anoVeiculo,
            userID: id,
            typeVehicle: req.body.typeVeh,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
        where: {
            userID: id,
            id: req.body.carId
        }
    });

    let objetoCarros = await model.Vehicle.findAll({
        where: {
            userID: id
        }
    })
    res.send(JSON.stringify(objetoCarros))
});

app.post("/enviaEmail", async (req, res) => {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "gasolinaacconts@gmail.com",
            pass: "asd123z4"
        }
    })

    const mailOptions = {
        from: 'gasolinaacconts@gmail.com',
        to: req.body.emailDeEnvio,
        subject: "Código de verificação Ga$olina",
        text: "Seu codigo de verificação é: " + req.body.cod + "."
    }
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });

})

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
app.listen(port, (req, res) => {
    console.log("servidor rodando")
})
