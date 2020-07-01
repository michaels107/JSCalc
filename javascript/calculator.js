/*Created 6/30/2020 by Duytan Tran
* Edited 6/30/2020 by Sean Michaels: Added the solve button and added a multiply button to work.
* Edited 7/1/2020 by Reema Gupta:  added a divide button to work.
* Edited 7/1/2020 by Duytan Tran
* Edited 7/1/2020 by Caroline Wheeler: Implementation of addition button.
* Javascript code for calculator action listening events.*/

/*Created 6/30/2020 by Duytan Tran
* Updates display accordingly for digit inputs*/
function digit_input(button, display){
  if(display.textContent === "0"){
    display.textContent = button.textContent;
  } else {
    display.textContent += button.textContent;
  }
}

/*Created 6/30/2020 by Duytan Tran
* Clears display and inputs accordingly*/
function clear_input(display, prepared_display){
    display.textContent = "0";
    prepared_display.textContent = undefined;
}

/*Created 6/30/2020 by Duytan Tran
  Edited 6/30/2020 by Sean Michaels: Added the solve button and added a multiply button to work.
  Edited 7/1/2020 by Reema Gupta: Added divide button
  Edited 7/1/2020 by Duytan Tran: Added subtract button, factored out common code in solve
  Edited 7/1/2020 by Caroline Wheeler: Added addition button
  Main*/
const calculator = document.querySelector('.calculator');
const prepared_display = document.querySelector('.prepared_display');
const display = document.querySelector('.display');
const buttons = calculator.querySelector('.buttons');
let op = "";
let result = "";
let first_num = "";
let sec_num = "";
buttons.addEventListener('click', e => {
    if(e.target.matches('button')){
        const button = e.target;
        const action = button.dataset.action;
        switch(action){ //Responding accordingly to calculator button press
            case 'multiply' :
                first_num = display.textContent;
                prepared_display.textContent = display.textContent + " *";
                display.textContent = "0";
                op = "*"; // 1 being a flag for multi
                break;
            case 'divide' :
                first_num = display.textContent;
                prepared_display.textContent = display.textContent + " /";
                display.textContent = "0";
                op = "/";
                break;
            case 'add' :
                first_num = display.textContent;
                prepared_display.textContent = display.textContent + "+";
                display.textContent = "0";
                op = "+";
                break;
            case 'subtract' :
                first_num = display.textContent;
                prepared_display.textContent = display.textContent + " -";
                display.textContent = "0";
                op = "-";
                break;
            case 'clear':
                clear_input(display, prepared_display);
                break;
            case 'solve':
                sec_num = display.textContent;
                if(op == "*"){ // checks the flag for which op it is
                    result = parseInt(first_num) * parseInt(sec_num);
                }
                else if (op == "/"){
                    result = parseFloat(first_num) / parseFloat(sec_num);
                }
                else if (op == "+"){
                    result = parseFloat(first_num) + parseFloat(sec_num);
                }
                else if (op == "-"){
                    result = parseFloat(first_num) - parseFloat(sec_num);
                }
                first_num = "";
                sec_num = "";
                prepared_display.textContent = "";
                display.textContent = result.toString();
                break;
            default:
                digit_input(button, display, calculator);
                let num = display.textContent;
        }
    }
})
