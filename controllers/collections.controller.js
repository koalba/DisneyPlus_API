const { Collection } = require('../schemas/schemas')

async function getCollections( req , res ){
    let msj = 'GET de todas las Collection'
    let data = await Collection.find().catch( err => { msj = err.message; return [] } )

    res.status(200).json({ data, msj })
}

module.exports = { getCollections }