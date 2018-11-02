function hello(){
console.log("Hello World");}

function end(z) {
    var p = document.getElementById("output");
    p.innerText ="result: " + z;
    console.log(p);
}

function start() {
    var x = document.getElementById("startButton");
    getNums();
}

function getNums() {
    var x = document.getElementById("num1").value;
    var x1 = parseInt(x);
    var y = document.getElementById("num2").value;
    var y1 = parseInt(y);
    radioChoice(x1,y1);
}

function radioChoice(x,y) {
    var s = document.querySelector('input[name="symbol"]:checked').value;
    console.log(s);
    if (s === "+") {
        var z = add(x,y);
        console.log(z);
        end(z);
        
    }
    else if (s === "-") {
        var z = subtract(x,y);
        console.log(z);
        end(z); 
    }
    else if (s === "*") {
        var z = multiply(x,y);
        console.log(z);
        end(z);
    }
    else {
        var z = divide(x,y);
        console.log(z);
        end(z);
    }
}

function add(x,y) {
return x+y;
}
function subtract(x,y) {
return x-y;
}
function multiply(x,y) {
return x*y;
}
function divide(x,y) {
return x/y;
}
