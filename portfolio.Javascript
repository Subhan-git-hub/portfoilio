let time=document.getElementsByClassName('time')[0];
setInterval(()=>{
let d=new Date()
time.innerHTML=d.toLocaleTimeString()
},1000)

let whatsapp=document.getElementById('whatsapp');

whatsapp.addEventListener('click',function(){
location="https://whatsapp.com"
})

let instagram=document.getElementById('instagram');

instagram.addEventListener('click',function(){
location="https://instagram.com"
})

let fb=document.getElementById('whatsapp');

fb.addEventListener('click',function(){
location="https://facebook.com"
})
