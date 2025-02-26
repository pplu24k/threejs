'use client'
import { useEffect, useLayoutEffect, useRef } from "react"
import {Scene, WebGLRenderer, PerspectiveCamera, Mesh, MeshBasicMaterial, BoxGeometry} from "three"
export default function Homepage (){
    const canvas = useRef(null);
    let started = false
    useEffect(() => {

            started=true
            console.log("CARGANDO")
            const scene = new Scene()
            const renderer = new WebGLRenderer({
                antialias: true,
                canvas: canvas.current
            })
            renderer.setSize(window.innerWidth,window.innerHeight)
            const camera = new PerspectiveCamera(50, window.innerWidth / window.innerHeight,0.1,1000)

            //Crear cubo
            const geometry = new BoxGeometry(1,1,1)
            const material = new MeshBasicMaterial({color: '0xffffff'})
            const cube = new Mesh(geometry,material)

            scene.add(cube)
            camera.position.z=6


            function animate(){
                cube.rotation.x += 0.01
                cube.rotation.y += 0.01

                renderer.render(scene, camera)
                requestAnimationFrame(animate)
            }
            animate()
        


    },[])
    

    
    return (
        <>
        <canvas  ref={canvas}>
    
    
    
        </canvas>
        
        
        </>
    )

}
