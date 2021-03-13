const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const particlesArray =[];



window.addEventListener('resize',function(){
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

});

const mouse={
    x:undefined,
    y:undefined,
    //by setting x and y to undefined the canvas is black until it is interacted with 
    
}
canvas.addEventListener('click',function(event){
    mouse.x = event.x;
    mouse.y = event.y;
   particlesArray.push(new Particle());

});

canvas.addEventListener('mousemove',function(event){
    mouse.x = event.x;
    mouse.y = event.y;
    particlesArray.push(new Particle());

})

class Particle {
    constructor(){
        this.x =mouse.x;
        this.y =mouse.y;
      // this.x=Math.random()*canvas.width;
     //  this.y=Math.random()*canvas.height;
        this.size = Math.random()*15+1;//this assigns a particle size at random between 1 and 6
        this.speedx=Math.random()*3-1.5;
        this.speedy=Math.random()*3-1.5;
    }
    update(){
        this.x+=this.speedx;
        this.y+=this.speedy;
        if(this.size>0.2) this.size-=0.1;
    }
    draw(){
        ctx.fillStyle ='green';
        ctx.beginPath();
        ctx.arc( this.x,this.y,this.size,0,Math.PI*2);
        ctx.fill();
    }
}

function handleParticles(){
    for(let i = 0;i<particlesArray.length;i++){
        particlesArray[i].update();
        particlesArray[i].draw();
        if(particlesArray[i].size<=0.3){
            particlesArray.splice(i,1);
            i--;//this is used to keep from having blinking particles
        }
    }
}

function animate(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    handleParticles();
    requestAnimationFrame(animate);
    //by setting argument for requestAnimationFrame to animate this will create a loop


}
animate();