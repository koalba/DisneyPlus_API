console.clear()

const express  = require('express')
const app      = express()

const router   = require( './router/router' )
const cors     = require( 'cors' )
const mongoose = require('mongoose')

// const { mongo_user , mongo_pass } = require( 'dotenv' ).config().parsed

app.use( cors() )
app.use( express.urlencoded({ extended : false }))
app.use( express.json() )
app.use( router )

let connect = async () => await mongoose.connect( `mongodb+srv://${process.env.mongo_user}:${process.env.mongo_pass}@koalba.ghgng.mongodb.net/disney-plus?retryWrites=true&w=majority`, {
    useNewUrlParser    : true,
    useUnifiedTopology : true
}, () => console.log('MongoDB Connect'))

connect()

app.listen( 5000, () => { console.log('Iniciando la APP') })