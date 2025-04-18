import express from 'express'
const routerUsuarios = express.Router()
import usuariosController from '../controllers/usuarios.controller.js'


routerUsuarios.get('/', usuariosController.getAll )

routerUsuarios.get('/:id', usuariosController.getOne )

routerUsuarios.post('/', usuariosController.create )


 routerUsuarios.put('/:id', usuariosController.update )

  
 routerUsuarios.delete('/:id', usuariosController.remove)

 export default routerUsuarios;