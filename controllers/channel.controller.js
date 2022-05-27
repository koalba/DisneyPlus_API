const { Channel } = require('../schemas/schemas')

async function getChannels( req , res ){
    let msj = 'GET all Channels'

    const data = await Channel.find().catch( err => {
        msj = err.message
        return []
    })

    res.status(200).json({ data , msj })
}

async function getChannelByID( req , res ){
    const { id } = req.params

    let msj = 'GET Channel por ID'
    const data = await Channel.findById( id ).catch( err => {
        msj = err.message
        return []
    })

    res.status(200).json({ data , msj })
}

module.exports = {
    getChannels,
    getChannelByID
}