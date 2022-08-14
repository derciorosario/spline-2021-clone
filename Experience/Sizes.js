import Expererience from './Experience'
import {EventEmitter}  from 'events'
export default class Sizes  extends EventEmitter{
    constructor(){
          super()
          this.expererience=new Expererience()
          this.canvas=this.expererience.canvas
          this.container=document.querySelector('.model-3d')
          this.width=this.container.clientWidth
          this.height=this.container.clientHeight
          this.aspect=this.container.clientWidth/this.container.clientHeight
          this.pixelRatio=Math.min(window.devicePixelRatio,2)



          window.addEventListener('resize',()=>{
            this.emit('resize')  
            this.width=this.container.clientWidth
            this.height=this.container.clientHeight
            this.aspect=this.container.clientWidth/this.container.clientHeight
            this.pixelRatio=Math.min(window.devicePixelRatio,2)
          })
          
    }
   

}