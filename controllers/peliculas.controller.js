const { Pelicula } = require('../schemas/schemas')

async function getPeliculas( req , res ){
    let msj = 'GET de todas las Peliculas'

    const data = await Pelicula.find().catch( err => {
        msj = err.message
        return[]
    })

    res.status(200).json({ data , msj })
}

async function getPeliculasByID( req , res ){
    const { id } = req.params

    let msj = 'GET de Pelicula por ID'
    const data = await Pelicula.findById( id ).lean().catch( err => {
        msj = err.message
        return[]
    })

    const peliculas = await Pelicula.find().lean().catch( err => {
        msj = err.message
        return[]
    })

    for( let genre of data.details.genre ){
        data.sugerencias = peliculas.filter( pelicula => pelicula.details.genre.includes( genre ) && pelicula.titulo !== data.titulo )
    }

    res.status(200).json({ data , msj })
}

async function getPeliculasByName( req , res ){
    let { nombre } = req.params
    console.log(nombre)

    let msj = 'GET de Pelicula por Nombre'
    let data = []

    let pattern = new RegExp( `^${nombre}` )

    data = await Pelicula.find({ titulo : { $regex: pattern, $options: 'xi' } })

    res.status(200).json({ data , msj })
}


module.exports = {
    getPeliculas,
    getPeliculasByID,
    getPeliculasByName
}