import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";


export default class Loader extends GLTFLoader{
    constructor(){
        super()
        const dracoLoader = new DRACOLoader()
        dracoLoader.setDecoderPath("https://www.gstatic.com/draco/v1/decoders/")
        dracoLoader.preload( )
        dracoLoader.setDecoderConfig({type: "js"})
        this.setDRACOLoader(dracoLoader)

    }

}