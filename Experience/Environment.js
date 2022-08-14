import Expererience from './Experience'
import * as THREE from 'three'
import {EventEmitter} from 'events'
export default class Environment  {
    constructor(){
        this.expererience=new Expererience()
        this.scene=this.expererience.scene
        this.world=this.expererience.world
        this.sunLight=new THREE.DirectionalLight(0xFFFF4E,4)
        this.sizes=this.expererience.sizes
        this.createAmbientLight()
        this.createSunLight()

        this.world.on('sun-position',({x,y})=>{
             this.x=(x-window.innerWidth/2)  / (window.innerWidth / 6)
             this.y=(window.innerHeight / 2 - y) / (window.innerHeight / 11) + 1
             this.sunLight.position.set(this.x,this.y,-3)
        })


    }
    createAmbientLight(){
          this.ambientLight=new THREE.AmbientLight(0xffffff,6)
          this.scene.add(this.ambientLight)

    }
    
    createSunLight(){
        this.sunLight.castShadow=true
        this.sunLight.shadow.camera.far=50
        this.sunLight.shadow.mapSize.set(1024,1024)
        this.sunLight.shadow.normalBias=0.4
        this.sunLight.position.set(-1,5,-3)
        this.scene.add(this.sunLight)
          
        this.sunLight_2=new THREE.DirectionalLight(0xFFFF4E,0.3)
        this.sunLight_2.position.set(0,5,0)
        this.scene.add(this.sunLight_2)

       
    }

   
    update(){

    }
}