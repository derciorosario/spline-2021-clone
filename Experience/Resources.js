import Expererience from './Experience'
import * as THREE from 'three'
import assets from './assets'
import {EventEmitter}  from 'events'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'
import {DRACOLoader} from 'three/examples/jsm/loaders/DRACOLoader'

export default class Renderer extends EventEmitter{
    constructor(){
          super()
          this.expererience=new Expererience()
          this.setLoader()
          this.files={}
          this.queue=0
          this.assetsNumber=1
          this.loading()
  
    }
    setLoader(){
         this.loaders={}
         this.loaders.gltLoader=new GLTFLoader()
         this.loaders.dracoLoader=new DRACOLoader()
         this.loaders.dracoLoader.setDecoderPath('/draco/')
         this.loaders.gltLoader.setDRACOLoader(this.loaders.dracoLoader)
    }

    loading(){

        
       for (var asset of assets){
          this.loaders.gltLoader.load(asset.src,(file)=>{
               this.loaded(asset,file)
          })
       }
      

    }
    loaded(asset,file){
        this.queue++
        this.files[asset.name]=file
        if(this.queue == this.assetsNumber){
            this.emit('loaded')
        }


    }



   

    
   

}