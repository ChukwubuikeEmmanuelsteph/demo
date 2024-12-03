let plus = document.getElementById('plus')
let minus = document.getElementById('minus')
let divide = document.getElementById('divide')
let multiply = document.getElementById('multiply')
let equal = document.getElementById('equal')
let clear = document.getElementById('clear')
let screen = document.getElementById('screen')

let sign;
let leftValue;
let rightValue;
let ans;

screen.innerHTML = ""
// a function that adds number to the screen
function addToScreen (num){
    screen.innerHTML += num
    screen.style.fontSize = "50px"
    screen.style.color = 'white'
}
// a function that clears the screen
function clearScreen (){
    screen.innerHTML = ""
}
// a function that checks for addition operations and other operations
function addFunction (){
    leftValue = Number(screen.innerHTML);
    sign = '+'
    screen.innerHTML = ""
    console.log(leftValue);
    
}

function minusFunction (){
    leftValue = Number(screen.innerHTML);
    sign = '-'
    clearScreen()
}
function multiplyFunction (){
    leftValue = Number(screen.innerHTML);
    sign = '*'
    clearScreen()
}
function divideFunction (){
    leftValue = Number(screen.innerHTML);
    sign = '/'
    clearScreen()
}

function calculate (){
   rightValue = Number(screen.innerHTML)
    clearScreen()

    if (sign=='+') {
       ans = leftValue + rightValue
       screen.innerHTML = ans
    } else if(sign=='-'){
        ans = leftValue - rightValue
        screen.innerHTML = ans
    }
    else if(sign == '*'){
        ans = leftValue * rightValue
        screen.innerHTML = ans 
    }
    else if(sign == '/'){
        ans = leftValue / rightValue
        screen.innerHTML = ans 
    }
}


clear.addEventListener('click', clearScreen)
plus.addEventListener('click', addFunction)
minus.addEventListener('click', minusFunction)
equal.addEventListener('click', calculate)
multiply.addEventListener('click', multiplyFunction)
divide.addEventListener('click', divideFunction)



