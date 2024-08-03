const pi=3.14; 
let radius;
let circumference;

document.getElementById("mySubmit").onclick = function(){
    radius= document.getElementById("myText").value;
    circumference= 2*pi*radius;
    document.getElementById("myOutput").textContent = `The Circumference is: ${circumference}`
};

document.getElementById('myReset').onclick = function(){
    document.getElementById("myOutput").textContent =``;
    document.getElementById("myText").value=``;
}