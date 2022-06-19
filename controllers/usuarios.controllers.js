const {response,request} = require('express')

const usuariosGet = (req =request, res = response)=> {
    //req.query obtiene los q estan despues de '?' (q son opcionales)
    const {nombre='',apikey} = req.query
    res.json({
        msg:'get API - Controlador',
        nombre,
        apikey
    })
}

const usuariosPost = (req =request, res = response)=> {
   
    const {nombre,edad}=req.body;
    res.json({
        msg:'Post API - Controlador',
        nombre,
        edad,

    })
}

const usuariosPut = (req =request, res = response)=> {
    //req.params obtiene los q se definen en las rutas y por tanto son obligatorios 
    const id = req.params.id;
    const {nombre,edad}=req.body;
    res.json({
        msg:'Put API - Controlador',
        nombre,
        edad,
        id
    })
}

const usuariosDelete = (req =request, res = response)=> {
    res.json({
        msg:'Delete API - Controlador'
    })
}

const usuariosPatch= (req =request, res = response)=> {
    res.json({
        msg:'get Patch - Controlador'
    })
}


module.exports={
    usuariosGet,
    usuariosDelete,
    usuariosPatch,
    usuariosPost,
    usuariosPut
}