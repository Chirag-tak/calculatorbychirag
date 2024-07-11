
alert("Welcome to Our site");
let display=document.getElementById("display");
function clearDisplay(){
    display.value="0";
}
function appendNumber(number){
    if(display.value === '0'){
        display.value = number;
    }else{
        display.value += number;
    }
}
function appendOperator(operator){
    display.value += operator;
}
function backspace(){
    display.value=display.value.slice(0,-1);
    if(display.value===''){
        display.value='0';
    }
}
function calculateResult(){
    try{
        display.value=eval(display.value);
    }catch{
        display.value='Error';
    }
}

document.addEventListener("keydown",function(event){
    if(event.key==="Enter"){
        calculateResult();
    }
    else if(event.key==="*"||event.key==="+"||event.key==="-"||event.key==="/"||event.key==="/"){
        appendOperator(event.key);
    }else if (event.key === "Backspace"|| event.key==="Delete") { 
        backspace();
      }else if(event.key==="C"|| event.key==="c"){
        clearDisplay();
    }
    else{
        appendNumber(event.key);
    }
});