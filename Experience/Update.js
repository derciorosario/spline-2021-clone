import {EventEmitter}  from 'events'
export default class Updade extends EventEmitter{
    constructor(){
        super()
        this.update()
    }
    update(){
        this.emit('update')
        window.requestAnimationFrame(()=>this.update())
    }

}