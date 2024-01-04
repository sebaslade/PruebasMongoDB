/*
const event = require('events')
const eventEmitter = new event.EventEmitter()

eventEmitter.on('Mensaje recibido', function(){
    console.log("Listener called")
})

eventEmitter.emit('Mensaje recibido')
*/

/*
const event = require('events')
const eventEmitter = new event.EventEmitter()

eventEmitter.on('Mensaje recibido', function(){
    console.log("Listener called")
})

eventEmitter.emit('Mensaje recibido')

const log = require('./logger')
log('Mensaje enviado')
*/

const event = require('events')
const Logger = require('./logger')
const logger = new Logger()

logger.on('Mensaje recibido', (arg)=>{
    console.log("Listener called", arg, new Date().toLocaleDateString(), new Date().toLocaleTimeString())
})

logger.log('Mensaje enviado')