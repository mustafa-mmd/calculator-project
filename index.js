const display=document.getElementById("display");
function clickFunc(input){
display.value += input;

}
function calcFunc(){
display.value=eval(display.value);
}
function cleardisFunc(){
  display.value="";
}