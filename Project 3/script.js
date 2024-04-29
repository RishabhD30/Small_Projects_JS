const main = document.querySelector("#main");
const cur = document.querySelector("#cursor") 

main.addEventListener('mousemove',(e)=>{ 
    cur.style.left = e.x+"px";
    cur.style.top  = e.y+"px";
})