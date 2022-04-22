import React,{ useState,useEffect,useRef } from 'react';
import  './Canvas.module.css'




export default function Canvas(){
//canvas setup
const [canvasContext, setCanvasContext] = useState(null);
console.log(canvasContext,'canvasContect')
let ctx;
const canvasRef= useRef(null);

let canvas= canvasRef
console.log(canvas,'canvas')


useEffect(()=>{
    canvas.current.style.width= `${height}px`;
    console.log(canvas.width ,'CW')
    canvas.current.style.height= `${width}px`;
    // ctx = context
    ctx=  canvas.getContext('2d')
    console.log(ctx,'ctx')
     setCanvasContext(ctx)
    
    
},[height,width])  


const numberOfParticles = 100;
let particleArray = [];
//get mouse position
const [mouse,setMouse]= useState({x:0,y:0})

console.log(mouse,'mouse')
useEffect(()=>{
    const trackMouse=(el)=>{
        setMouse({x:el.clientX, y:el.clientX})
    }

    window.addEventListener('mousemove', trackMouse);
    return ()=>window.removeEventListener('mousemove', trackMouse)
})


class Particle{
    constructor(x,y,size,weight,color){
        this.x=x;
        this.y=y;
        this.color= color;
        this.size= size;
        this.weight= weight;
    }
    draw(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
    update(){
        this.size -= 0.05;
        if(this.size < 0){
            this.x = (mouse.x + ((Math.random() * 20) - 10));
            this.y = (mouse.y + ((Math.random() * 20) - 10));
            this.size = (Math.random() * 10) + 2;
            this.weight = (Math.random() * 2) - 0.5;
        }
        this.y += this.weight;
        this.weight += 0.2;

        if(this.y > canvas.height - this.size){
            this.weight *= -1;
        };
    }
}

function init(){
    particleArray =[];
    for(let i =0; i<numberOfParticles; i++){
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        let size = (Math.random() * 5) + 2;
        let color = 'black';
        let weight = 1;
        particleArray.push(new Particle(x,y,color,size,weight));
    }
}
function animate(){
    ctx.clearRect(0,0, canvas.width, canvas.height);
    for(let i =0; i < particleArray.length;i++){
        particleArray[i].update();
        particleArray[i].draw();
    }
    requestAnimationFrame(animate);
}

init();
animate();

  return (
    <div>
        <div ref={canvasRef} className="canvas1" height={400} width={400}></div>
    </div>
  )
}

