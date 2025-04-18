import mongoose from "mongoose";


const UsuarioEsquema = new mongoose.Schema(
    {
        nombre: {
            type: String,
            required: true
        },
        apellido: {
            type: String,
            required: true
        },
        correo: {
           type: String,
           required: true,
           unique: true
        },
        dni: {
            type: String,
            required: true
        },
        nacionalidad: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        }
    },
    {
        timestamp: true,
        versionKey: false
    }
)

const UsuarioModelo = mongoose.model('usuarios', UsuarioEsquema)

const obtenerTodosLosUsuarios = () => {

}
const obtenerUnUsuario = () => {

}
const crearUnUsuario = async (nuevoUsuario) => {
try {
    const usuarioCreado = new UsuarioModelo(nuevoUsuario)
    const usuarioGuardado = await usuarioCreado.save()
    return usuarioGuardado
} catch (error) {
    throw error
}
}
const editarUnUsuario = () => {

}
const eliminarUsuario = () => {

}

export default {
    obtenerTodosLosUsuarios,
    obtenerUnUsuario,
    crearUnUsuario,
    editarUnUsuario,
    eliminarUsuario
}