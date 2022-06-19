
const express = require('express')
const cors = require('cors')

class Server{

    constructor() {
        this.app= express();
        this.port=process.env.PORT;
        this.usuariosPath = '/api/usuarios'

        //middlewares
        this.middlewares();
        //rutas
        this.routes();
    }

    middlewares(){
        
        //cors
        this.app.use(cors())
        //middleware para recibir datos desde el front 
        this.app.use(express.json())

        //para crer middlewears para las carpeta publicase debe usar a palabra reservada use y decir cual carpeta
        this.app.use(express.static('public'));
    }
    

    routes(){
        /* CON STATUS*/
        // this.app.get('/api', (req, res)=> {
        //     res.status(403).json({
        //         msg:'get API'
        //     })
        // })

        this.app.use(this.usuariosPath,require('../routes/usuarios.routes'))

    }

    listen(){
        this.app.listen(this.port,()=>{
            console.log('servidro escuchando en el puerto: ',this.port)
        })
    }

}

module.exports=Server;