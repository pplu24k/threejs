'use client'
import {Component, ReactNode, RefObject, createRef} from 'react'

import Renderer from './classes/Renderer';


export default class Background extends Component{
    canvasReference: RefObject<HTMLCanvasElement>;

    constructor(props: {}) {
        super(props);
        this.canvasReference = createRef(); // 🔹 Inicializar la referencia
        
      }


    componentDidMount(): void {

  
        const renderer = new Renderer(this.canvasReference.current)
    }

    render(): ReactNode {
        return (
            <canvas ref={this.canvasReference} />
        )
    }




}