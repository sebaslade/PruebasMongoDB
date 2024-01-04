/*
const event = require('events')
const eventEmitter = new event.EventEmitter()

var url = 'http://programacionweb.com.pe'

function log(mensaje){
    console.log(mensaje)
    eventEmitter.emit('Mensaje recibido',{id:1,url:url})
}

module.exports=log;
*/

const eventEmitter = require('events')

var url = 'http://programacionweb.com.pe'

class Logger extends eventEmitter{
    log(mensaje){
        console.log(mensaje)
        this.emit('Mensaje recibido',{id:1,url:url})
    }
}

module.exports=Logger;