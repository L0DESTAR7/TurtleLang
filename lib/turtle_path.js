import {ctx} from "./translate.js";
export function turtlePath(drawTurtle){
ctx.beginPath()
ctx.beginPath()
ctx.moveTo(0, 0)
ctx.lineTo(0, 10)
ctx.stroke()
ctx.translate(0, 10)
ctx.closePath()

ctx.rotate(Math.PI)
drawTurtle()
}