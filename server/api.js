'use strict'

const db = require('APP/db')
const api = module.exports = require('express').Router()

api
  .get('/heartbeat', (req, res) => res.send({ok: true,}))
  .get('/.well-known/acme-challenge/WI2orW-toH8q2Ax06dBc73gDog2l0A3u8LyhEaLbXpM', (req, res) => 
    res.sendFile(/.well-known/acme-challenge/WI2orW-toH8q2Ax06dBc73gDog2l0A3u8LyhEaLbXpM)
  )
  .use('/auth', require('./auth'))
  .use('/users', require('./users'))

// No routes matched? 404.
api.use((req, res) => res.status(404).end())