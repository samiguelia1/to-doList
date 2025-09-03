import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

function H1Gsap() {
    useGSAP(()=>{
            gsap.from("#title",{
                y:50,
                duration:0.7,
                opacity:0,
                ease:"back.in"
            })
    },[])
  return (
    <div><h1 id="title" className= "h1-class">TO-DO LIST</h1></div>
  )
}

export default H1Gsap