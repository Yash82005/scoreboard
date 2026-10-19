let num1 = 0
let num2 = 0

let h1 = document.getElementById("home-pt")
let h2 = document.getElementById("guest-pt")

function hp1(){
    num1 += 1
    h1.textContent = num1
}
function hp2(){
    num1 += 2
    h1.textContent = num1
}
function hp3(){
    num1 +=3
    h1.textContent = num1
}

function gp1(){
    num2 += 1
    h2.textContent = num2
}

function gp2(){
    num2 += 2
    h2.textContent = num2
}
function gp3(){
    num2 += 3
    h2.textContent = num2
}
function newmatch(){
    num1 = 0
    num2 = 0
    h1.textContent = num1 
    h2.textContent = num2
}
function foulforhome(){
    num1 -= 2
    h1.textContent = num1
}
function foulforguest(){
    num2 -= 2
    h2.textContent = num2
}
