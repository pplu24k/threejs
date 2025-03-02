import { BackSide, Mesh, MeshPhongMaterial, Scene, SphereGeometry, TextureLoader } from "three"

export default class Skybox {
    constructor(scene: Scene) {



        const skyGeometry = new SphereGeometry(360, 25, 25)
        const loader = new TextureLoader()
        const texture = loader.load("/custom-sky.png")
        const material2 = new MeshPhongMaterial({
            map: texture
        })
        const skybox = new Mesh(skyGeometry, material2)
        scene.add(skybox)
        skybox.material.side = BackSide

    }
}