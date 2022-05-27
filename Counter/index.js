let number = Number(document.getElementById("number").innerHTML)
let handleIncrement = () =>{
    number = number + 1;
    document.getElementById("number").innerHTML = number;
}

let handleDecrement = () =>{
    number = number - 1;
    document.getElementById("number").innerHTML = number;
}

let handleReset = () =>{
    number = 0;
    document.getElementById("number").innerHTML = 0;
}