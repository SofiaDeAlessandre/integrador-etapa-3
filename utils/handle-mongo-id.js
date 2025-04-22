// elemento = {
//     _id:'ObjectId',
//     nombre: 'Nombre'
// }


const handleMongoId = (elemento) => {

    const clave = '_id'

elemento = JSON.parse(JSON.stringify(elemento))

if( Array.isArray(elemento)) {
    console.log('Llego un array de productos')

    for (let i = 0; i < elemento.length; i++) {
        elemento[i].id = elemento[i][clave]
        delete elemento[clave]
        
    }

} else {
    console.log('LLego un documento')
    elemento.id = elemento[clave]
    delete elemento[clave]
}
return elemento
}

export default handleMongoId