import { AmbientLight, HemisphereLight, Scene } from "three";

export default class Lights {
    constructor(scene: Scene){
        scene.add(new AmbientLight(0xffffff, 0.8))
        scene.add(new HemisphereLight(0xffffff, 0.8))

    }
}