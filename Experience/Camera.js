import Expererience from './Experience'
import * as THREE from 'three'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'

export default class Camera{

    constructor(){
        this.expererience=new Expererience()
        this.sizes=this.expererience.sizes
        this.scene=this.expererience.scene
        this.canvas=this.expererience.canvas
        this.createPerspectiveCamera()

    }
   

    createPerspectiveCamera(){
        this.pesrpectiveCamera=new THREE.PerspectiveCamera(60,this.sizes.aspect,0.1,100)
        this.pesrpectiveCamera.position.z=3
        this.pesrpectiveCamera.position.y=0.2
        const orbit=new OrbitControls(this.pesrpectiveCamera,this.sizes.container)
    }
   
    resize(){
        this.pesrpectiveCamera.aspect=this.sizes.aspect
        this.pesrpectiveCamera.updateProjectionMatrix()
    }
    update(){

    }
    

}