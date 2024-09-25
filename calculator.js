let display=document.getElementById("display");
let button=document.querySelectorAll("button");

for(const btn of button){
    btn.addEventListener('click',(e)=>{
    if(e.target.value==="DEL"){
        display.value= display.value.slice(0,-1)
    }
    else if(e.target.value==="AC"){
        display.value="";
        console.log("CLEAR button is true");
    }
    else if(e.target.value==="="){
       let result=eval(display.value);
       console.log(result);
       display.value=result;
    }
    else{
        let text=e.target.innerText;
        display.value+=text;
    }
    })
}






