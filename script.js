const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;




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
   

});

canvas.addEventListener('mousemove',function(event){
    mouse.x = event.x;
    mouse.y = event.y;

})

function drawCircle(){

    ctx.fillStyle ='green';
    ctx.beginPath();
    ctx.arc( mouse.x,mouse.y,50,0,Math.PI*2);
    ctx.fill();


}
function animate(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    drawCircle();
    requestAnimationFrame(animate);
    //by setting argument for requestAnimationFrame to animate this will create a loop


}
animate();