const addbutton = document.querySelector("#add");
// const removebutton = document.querySelector("#remove")
const head5 = document.querySelector("h5")
let check = 0 ;

function nameChange(){
    if(check===0){   
        head5.innerHTML = "Friend";
        check +=1;
        addbutton.style.backgroundColor = "red"
        addbutton.style.color = "#FFF"
        addbutton.innerHTML="Remove"
    }
    else{
        head5.innerHTML = "Stranger";
        check-=1;
        addbutton.style.backgroundColor = "cadetblue";
        addbutton.style.color = "#fff";
        addbutton.innerHTML="Add Friend";

    }
}
// removebutton.style.backgroundColor = "red";
//         removebutton.style.color = "#FFF";

// function remFriend(){
//     head5.innerHTML="Add Friend"
//     removebutton.style.backgroundColor = "#dadada"
//     removebutton.style.color = "black";
// }

addbutton.addEventListener('click',nameChange);
// removebutton.addEventListener("click",remFriend);