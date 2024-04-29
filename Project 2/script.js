const con = document.querySelector("#container");
const love = document.querySelector("i");

function dblClicker(){
    love.style.transform='translate(-50%,-50%) scale(1)';

    setTimeout(() => {
        love.style.transform='translate(-50%,-50%) scale(0)';
    }, 1000);

}

con.addEventListener('dblclick' , dblClicker)
