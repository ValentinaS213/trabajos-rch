const express= require('express');
const morgan = require('morgan');
const service = require('./src/service');


const app = express();
const PORT = 5000;

app.use(morgan('dev'));
app.use(express.json()); //permite recibir datos tipo json

app.get("/", (req, res)=>{
    res.json({
        message: "Lista de Usuarios",
        body: service.getUsers(), 

    })

})
app.get('/:id', (req,res) =>{
    //const idUser= req.params['id'];
    //desesstructuracion
    let { params: {id}} =req;
    let user = service.getUser(id);
    res.json({
        message: `Usuario ${id}`,
        body: user
    })
})

app.post("/", (req,res) =>{
    //let newUser= req.body;
    let { body : newUser } = req;
    let user = service.createUser(newUser);
    res.status(201).json({
        message: "Nuevo usuario creado",

    })
})






app.listen(PORT,() => console.log(`Servidor Listen in ${PORT}`));
