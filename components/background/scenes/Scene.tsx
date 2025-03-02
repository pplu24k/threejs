import {Scene as SceneThree} from "three"
import Renderer from "../classes/Renderer"
import Camera from "../classes/Camera"
import Lights from "../classes/Lights"
import Skybox from "../classes/Skybox"
import Loader from "../classes/Loader"
import Logo from "../classes/pokemon/Logo"
export default class Scene extends SceneThree{

    private camera: Camera
    private lights: Lights

    constructor(renderer: Renderer){
        super()
        const loader = new Loader()
        this.camera = new Camera()
        new Lights(this)
        new Skybox(this)
        new Logo(this, loader)
        this.update(renderer)
    }

    private update(renderer:Renderer){
        renderer.render(this,this.camera)
        requestAnimationFrame(this.update.bind(this,renderer))
    }

}