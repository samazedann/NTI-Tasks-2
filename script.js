let count=0;
function increment(){
    count++;
    document.getElementsByClassName("counter").innerText = count;
}
function decrement(){
    count--;
    document.getElementsByClassName("counter").innerText = count;
}
function setVal(){
    let value= document.getElementById("valueInput").value;
}