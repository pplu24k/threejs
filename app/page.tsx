'use client'
import { useEffect, useLayoutEffect, useRef } from "react"
import {
    Scene,
    WebGLRenderer,
    PerspectiveCamera,
    Mesh,
    MeshBasicMaterial,
    BoxGeometry,
    SphereGeometry,
    TextureLoader,
    BackSide,
    MeshPhongMaterial,
    DirectionalLight,
    AmbientLight,
    HemisphereLight
} from "three"
export default function Homepage() {
    const canvas = useRef(null);
    let started = false
    useEffect(() => {

        started = true
        console.log("CARGANDO")
        const scene = new Scene()
        const renderer = new WebGLRenderer({
            antialias: true,
            canvas: canvas.current
        })
        renderer.setSize(window.innerWidth, window.innerHeight)
        const camera = new PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000)

        //Crear cubo
        const geometry = new BoxGeometry(1, 1, 1)
        const material = new MeshBasicMaterial({ color: '0xffffff' })
        const cube = new Mesh(geometry, material)

        scene.add(cube)
        camera.position.z = 6

        //crear skyboc

        const skyGeometry = new SphereGeometry(360, 25, 25)
        const loader = new TextureLoader()
        const texture = loader.load("/custom-sky.png")
        const material2 = new MeshPhongMaterial({
            map: texture
        })
        const skybox = new Mesh(skyGeometry, material2)
        scene.add(skybox)
        skybox.material.side = BackSide

        scene.add(new AmbientLight(0xffffff, 0.8))
        scene.add(new HemisphereLight(0xffffff, 0.8))



        function animate() {
            cube.rotation.x += 0.01
            cube.rotation.y += 0.01

            renderer.render(scene, camera)
            requestAnimationFrame(animate)
        }
        animate()



    }, [])



    return (
        <>
            <canvas ref={canvas}>



            </canvas>


        </>
    )

}
