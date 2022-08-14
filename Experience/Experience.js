import * as THREE from 'three'
import Camera from './Camera'
import Renderer from './Renderer'
import Sizes from './Sizes'
import Update from './Update'
import Resources from './Resources'
import World from './World'
import Environment from './Environment'

export default class Experience {

    constructor(canvas){
        if(Experience.instance){
                return Experience.instance
        }else{
            Experience.instance=this
        }

        this.canvas=canvas
        this.time=new Update()
        this.scene=new THREE.Scene()
        this.sizes=new  Sizes()
        this.camera=new Camera()
        this.renderer=new Renderer()
        this.resources=new Resources()
        this.world=new World()
        this.environment=new Environment()

        this.time.on('update',()=>{
            this.update()
            
        })
        this.sizes.on('resize',()=>{
            this.resize()
        })
        

       
    }
    resize(){
        this.renderer.resize()
        this.camera.resize()
        
        
    }
    update(){
        this.renderer.update()
        this.world.update()
       
       
    }
}