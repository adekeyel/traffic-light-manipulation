let nextLight="yellow";

const red= document.getElementById("red");
const green= document.getElementById("green");
const yellow= document.getElementById("yellow");

function showLight(color){
red.style.opacity="0.1";
green.style.opacity="0.1";
yellow.style.opacity="0.1";

if (color==="red") {
    red.style.opacity="1";
    
}
else if (color==="green"){
    green.style.opacity="1";
}
else if (color==="yellow"){
    yellow.style.opacity="1";
}
else{
    return;
}
}
showLight(nextLight);

setInterval(() => {
    
    switch (nextLight){
        case "red":
            nextLight="green";
            break;
            case "green":
                nextLight="yellow";
                break;
                case "yellow":
                nextLight="red";
                break;
                
    }
    showLight(nextLight);
    console.log(nextLight);
 },3000);
