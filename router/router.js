const express = require('express')
const router  = express.Router()

// ---------- PELICULAS ---------- //

const { getPeliculas , getPeliculasByID , getPeliculasByName } = require('../controllers/peliculas.controller')

router.route('/peliculas')
      .get  ( getPeliculas )

router.route('/peliculas/:id')
      .get  ( getPeliculasByID )

router.route('/peliculas/nombre/:nombre')
      .get  ( getPeliculasByName )

// ---------- CHANNELS ---------- //

const { getChannels , getChannelByID } = require('../controllers/channel.controller')

router.route('/channels')
      .get  ( getChannels )

router.route('/channels/:id')
      .get  ( getChannelByID )


// ---------- SLIDERS ---------- //

const { getSliders , getSlidersByType } = require('../controllers/sliders.controller')

router.route('/sliders')
      .get  ( getSliders )

router.route('/sliders/:tipo')
      .get  ( getSlidersByType )

// ---------- USERS ---------- //

const { getUsers, updateUser } = require('../controllers/user.controller')

router.route('/users')
      .get  ( getUsers )
      .put  ( updateUser )

// ---------- COLLECTIONS ---------- //

const { getCollections } = require('../controllers/collections.controller')

router.route('/collections')
      .get  ( getCollections )

module.exports = router