const { Slider , Pelicula } = require('../schemas/schemas')

async function getSliders( req , res ){
    let msj = 'GET todos los Sliders'
    const data = await Slider.find().catch( err => {
        msj = err.message
        return []
    })

    res.status(200).json({ data , msj })
}

async function getSlidersByType( req , res ){
    const { tipo } = req.params

    let msj = 'GET Sliders por Tema'
    const data = await Slider.find({ tipo }).lean().catch( err => {
        msj = err.message
        return []
    })

    const peliculas = await Pelicula.find({ tipo }).lean()

    data.map( slider => {
        slider.cards = slider.data !== 'random' 
        ? peliculas.filter( pelicula => {
            if( tipo === 'cover' ){
                return pelicula.type.cover
            } else if ( tipo === 'slider' ){
                return pelicula.type[ slider.data ]
            }
        })
        : [...peliculas].sort(( a , b ) => 0.5 - Math.random())
    })

    res.status(200).json({ data , msj })
}

module.exports = {
    getSliders,
    getSlidersByType
}