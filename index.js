//     <div id="calculator">
//         <div id="display"></div>
//         <div id="buttons-container"></div>
//         <div id="enter"></div>
//     </div>

//const calculatorEl = document.getElementById('calculator');
const displayEl = document.getElementById('display');
const buttonEl = document.getElementById('buttons-container');

for (let i =0; i<=9; i++){

    if (let j=0; j<4){}
    const button = document.createElement('button');
    button.textContent = i;
    button.onclick = () => {
        displayEl.textContent = i;
    };
    buttonEl.appendChild(button);
}

const calculationEl = document.getElementById('calculation');
calculationEl = ["+","-","*","/"];

for (let j =0; j<4; j++){
    const button = document.createElement('button');
    button.textContent = j;
    button.onclick = () => {
        displayEl.textContent = j;
    };
    buttonEl.appendChild(button);
}