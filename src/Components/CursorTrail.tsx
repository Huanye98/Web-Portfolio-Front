import Sketch from "react-p5";
import type { SketchProps } from "react-p5";


export default function CursorTrail(){
  let trail = []
  const maxLength = 50

  const setup:SketchProps["setup"] = (p5, canvasParentRef) => {
    p5.createCanvas(window.innerWidth, window.innerHeight)
    .parent(canvasParentRef)
    .style("position","absolute")
    .style("top","0px")
    .style("left","0px")
    .style("z-index","10")
    .style("pointer-events","none")
  }
  const draw:SketchProps["draw"] = (p5) => {
    p5.clear()
    trail.push(p5.createVector(p5.mouseX, p5.mouseY))
    if(trail.length > maxLength){
      trail.shift()
    }

    p5.stroke(255,0,0)
    p5.strokeWeight(3)
    p5.noFill()
    p5.beginShape()
    
    for (let v of trail){
      p5.vertex(v.x,v.y)
    }
    p5.endShape()
  }
  return <Sketch setup={setup} draw={draw} />
}