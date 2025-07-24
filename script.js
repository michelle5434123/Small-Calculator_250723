//     <div id="display"></div>
//     <div id="buttons-container"></div>

const displayEl = document.getElementById('display');
const buttonEl = document.getElementById('buttons-container');
let calculating=[];

for (let i =0; i<=9; i++){
    let numbers = document.createElement('button');
    numbers.textContent = i;
    numbers.onclick = () => {
        displayEl.textContent += i
        calculating.push(i);
    }
    buttonEl.appendChild(numbers);
}

let calculation = ["+","-","*","/","="];
for (let j =0; j < calculation.length; j++){
    let calculator = document.createElement('button');
    calculator.textContent = calculation[j];
    calculator.onclick = () => {
        if (calculation[j] === "=") {
            let expression = calculating.join('')
            // Evaluate the expression and show result
            try {
                let result = eval(expression);
                displayEl.textContent = result;

                // Reset calculating array to store new inputs after result
                calculating = [result];
            } catch (error) {
                displayEl.textContent = "Error";
                calculating = [];
            }
        }else {
            displayEl.textContent += calculation[j]
            calculating.push(calculation[j]);
        }
        }
    buttonEl.appendChild(calculator)
    }