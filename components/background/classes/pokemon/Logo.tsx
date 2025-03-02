import { Group } from "three";
import Loader from "../Loader";
import Scene from "../../scenes/Scene";

export default class Logo {
    private objet: Group
    constructor(scene: Scene, loader: Loader){
        loader.load("/logo.glb", (gltf) => {
            this.objet = gltf.scene
            scene.add(this.objet)
        })
    }
}