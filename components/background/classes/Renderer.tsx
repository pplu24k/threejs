import { WebGLRenderer } from "three";
import Scene from "../scenes/Scene";

export default class Renderer extends WebGLRenderer{

    constructor(canvas: HTMLCanvasElement){
        console.log(canvas)
        super({
            antialias: true,
            canvas
        })
        this.doConfig()

        new Scene(this)

    }
    private resize(){
        window.location.reload()
    }

    private doConfig(){
        this.setSize(window.innerWidth, window.innerHeight)
        window.addEventListener('resize', this.resize)

    }
}