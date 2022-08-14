import Expererience from './Experience'
import * as THREE from 'three'
import {EventEmitter} from 'events'
export default class World  extends EventEmitter{
    constructor(){
        super()
        this.expererience=new Expererience()
        this.resources=this.expererience.resources
        this.scene=this.expererience.scene
        this.sizes=this.expererience.sizes
        this.onMouseMove()
        

        this.resources.on('loaded',()=>{
            this.model=this.resources.files.main
            this.setModel()

        })
        this.minLoaderTime=0
        

    }
    setModel(){
          this.scene.add(this.model.scene)
          this.model.scene.scale.set(0.7,0.7,0.7)
          this.model.scene.rotation.x=0.7
          this.model.scene.children.forEach(child=>{
            child.castShadow=true
            child.receiveShadow=true
          })


          this.animated=[11,12]
          this.mixer=new THREE.AnimationMixer(this.model.scene)
          for(const object of this.animated){
            const animation=this.mixer.clipAction(this.model.animations[object])
            animation.play()
          }

          
         
          setTimeout(()=>{
            document.querySelector('.loader').style.display="none"
          },this.minLoaderTime >= 200 ? 0 : 3000)

        
         
         
          
         
       

    }
    onMouseMove(){
        this.sunCursor=document.querySelector('.img-cursor')
        this.sunCursor.style.display='block'

        window.addEventListener('mousemove',(e)=>{
          
        
              
              if(e.clientY < this.sizes.height/2){
                this.sunCursor.style.left=e.clientX+"px"
                this.sunCursor.style.top=e.clientY+"px"
              }else{
                  return
              }
            
             

              this.emit('sun-position',{x:e.clientX,y:e.clientY})
             
        })
    }
    update(){
        if(this.minLoaderTime <= 300){
          this.minLoaderTime++
        }
       
        if(this.mixer){
              this.mixer.update(6 * 0.0009)
        }
      
      
       
      
    }
}