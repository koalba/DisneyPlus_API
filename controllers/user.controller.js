const { User } = require('../schemas/schemas')

async function getUsers( req , res ){

    let msj = 'GET all Users'
    let data = await User.find().catch( err => { msj = err.message; return [] } )

    res.status(200).json({ data , msj })
}

async function updateUser( req , res ){
    const { id } = req.body

    let users = await User.find().catch( err => { msj = err.message; return [] })

    let usersClean = []
    users.map( user => { usersClean.push( { ...user.toObject(), _id : user.id })})
    
    let data = []
    
    usersClean.map( user => {
        let update = { ...user , active : user._id === id ? true : false }
        User.findByIdAndUpdate( id , update ).catch( err => { msj = err.message; return [] })
        data.push( update )
    })

    User.updateMany({}, { active : false }, { multi: true, upsert: true }, ( err , doc ) => {
        User.updateOne({ _id : id }, { active : true }, ( err , doc ) => {
            console.log(doc)
        })
    })

    // data = await 

    let msj = 'PUT all Users'
    res.status(200).json({ data , msj })
}

module.exports = { getUsers , updateUser }