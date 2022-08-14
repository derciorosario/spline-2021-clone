import Expererience from './Experience'
import * as THREE from 'three'

export default class Renderer{
    constructor(){
          this.expererience=new Expererience()
          this.canvas=this.expererience.canvas
          this.camera=this.expererience.camera
          this.scene=this.expererience.scene
          this.sizes=this.expererience.sizes
          this.setRenderer()
  
    }
    setRenderer(){
        this.renderer=new THREE.WebGLRenderer({
            canvas:this.canvas,
            alpha:true
        })
        this.renderer.physicallyCorrectLights=true
        this.renderer.outputEncouding=THREE.sRGBEncoding
        this.renderer.toneMapping=THREE.CineonToneMapping
        this.renderer.toneMappingExposure=2
        this.renderer.shadowMap.enabled=true
        this.renderer.shadowMap.type=THREE.PCFSoftShadowMap
        this.renderer.setSize(this.sizes.width,this.sizes.height)
        this.renderer.setPixelRatio(this.sizes.pixelRatio)
       
    }

    resize(){
        this.renderer.setSize(this.sizes.width,this.sizes.height)
        this.renderer.setPixelRatio(this.sizes.pixelRatio)
     
    }
    update(){
        this.renderer.render(this.scene,this.camera.pesrpectiveCamera)
       
    }

    
   

}