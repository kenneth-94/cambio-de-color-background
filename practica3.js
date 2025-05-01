/* este es para hacer el cambio con el getElmentById

document.getElementById("pressButton").onclick = function(){
    alert("cambio de color de nuevo");
}
*/

document.getElementById("changeColor").addEventListener("click", changeColor);

function changeColor(){
    const color= ["rgba(255, 99, 71, 0.6)",
    "rgba(255, 165, 0, 0.6)",     
    "rgba(255, 215, 0, 0.6)",     
    "rgba(255, 127, 80, 0.6)",   
    "rgba(250, 128, 114, 0.6)",   
    "rgba(240, 128, 128, 0.6)",   
    "rgba(255, 69, 0, 0.6)",      
    "rgba(255, 140, 0, 0.6)",    
    "rgba(255, 218, 185, 0.6)",   
    "rgba(255, 228, 225, 0.6)",   
    "rgba(255, 182, 193, 0.6)",  
    "rgba(255, 105, 180, 0.6)",   
    "rgba(205, 92, 92, 0.6)",    
    "rgba(255, 20, 147, 0.6)" ];
    const random= Math.floor(Math.random() * color.length);
    document.body.style.backgroundColor= color[random];
}
/*document.getElementById("changeColor").addEventListener("click",function(){
    document.body.style.background = "black";
});*/
