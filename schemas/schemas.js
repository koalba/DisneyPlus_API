const mongoose = require('mongoose')

let peliculaSchema = new mongoose.Schema(
    {
        titulo      : String,
        url         : String,
        scr         : String,
        srcBig      : String,
        cover       : String,
        height      : String,
        date        : String,
        texto       : String,
        logo        : String, 
        logoCover   : String,
        descripcion : String,
        trailer     : String,
        type        : {
            cover   : Boolean,
            new     : Boolean,
            coming  : Boolean
        },
        details     : {
            duration         : String,
            releaseDate      : String,
            rating           : Number,
            season           : Number,
            subtitles        : Boolean,
            audioDescription : Boolean,
            photosensitive   : Boolean,
            sinopsis         : String,
            genre            : [String],
            starring         : [String]
        }
    },
    { collection: 'peliculas' , versionKey: false }
)

const Pelicula = mongoose.model( 'Pelicula' , peliculaSchema )

let channelShema = new mongoose.Schema(
    {
        logo  : String,
        video : String,
        url   : String,
        title : String
    },
    { collection: 'channel' , versionKey: false }
)

const Channel = mongoose.model( 'Channel', channelShema )

let sliderSchema = new mongoose.Schema(
    {
        tipo   : String,
        titulo : String,
        data   : String,
        height : Boolean,
        cards  : Array
    },
    { collection: 'sliders' , versionKey: false }
)

const Slider = mongoose.model( 'Slider', sliderSchema )

let userSchema = new mongoose.Schema(
    {
        username : String,
        avatar   : String,
        locked   : Boolean,
        active   : Boolean
    },
    { collection: 'users' , versionKey: false }
)

const User = mongoose.model( 'User', userSchema )

let collectionSchema = new mongoose.Schema(
    {
        name : String,
        url  : String
    },
    { collection: 'collections' , versionKey: false }
)

const Collection = mongoose.model( 'Collection', collectionSchema )

module.exports = { Pelicula , Channel , Slider , User , Collection }
