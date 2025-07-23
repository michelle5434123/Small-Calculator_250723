
const displayEl = document.getElementById('display');
const buttonEl = document.getElementById('buttons-container');

//number buttons
for (let i = 0; i <= 9; i++) {
    var numbers = document.createElement('button');
    numbers.textContent = i;
//    numbers.onclick = () => {
//        displayEl.textContent = i;
//    };
    buttonEl.appendChild(numbers);
}

//operators buttons
let operators = ["+","-","*","/"];

for (let j = 0; j < 4; j++) {
    var calculation = document.createElement('button');
    calculation.textContent = operators [j];
//    calculation.onclick = () => {
//        displayEl.textContent = operators [j];
//        rear = operators [j];
//    };
    buttonEl.appendChild(calculation);
}

calculator()

// front, operator, rear, equal
function calculator() {
    let front=0;
    let rear=0;
    let operator =0;

    // *front, operator, rear, equal
    numbers.onclick = () => {
         front = numbers.textContent;
    }
    console.log(front);

    // front, *operator, rear, equal
    calculation.onclick = () => {
        operator = calculation.textContent;
    }
    console.log(operator);
    console.log(typeof operator);

    // front, operator, *rear, equal
    numbers.onclick = () => {
        rear = numbers.textContent;
    }
    console.log(rear);


//    calculation.onclick = () => {
//        displayEl.textContent = operators [j];
//        rear = operators [j];
//    };
}

function addition(a,b){
    return a + b;
}
function subtraction(a,b){
    return a - b;
}
function multiplication(a,b){
    return a * b;
}
function division(a,b){
    return a / b;
}
