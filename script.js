const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;




window.addEventListener('resize',function(){
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

});

const mouse={
    x:null,
    y:null,
}
canvas.addEventListener('click',function(event){
    mouse.x = event.x;
    
})


ctx.fillStyle ='red';
ctx.strokeStyle ='red';
ctx.lineWidth =5;
ctx.beginPath();
ctx.arc(100,100,50,0,Math.PI*2);
ctx.stroke();


