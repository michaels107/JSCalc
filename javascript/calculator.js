/*Created 6/30/2020 by Duytan Tran
* Edited 6/30/2020 by Sean Michaels : Added the solve button and added a multiply button to work.
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
        switch(action){
            case 'multiply' :
                first_num = display.textContent;
                prepared_display.textContent = display.textContent + " *";
                display.textContent = "0";
                op = "*"; // 1 being a flag for multi
                break;
            case 'subtract':
                //stub
                break;
            case 'clear':
                clear_input(display, prepared_display);
                break;
            case 'solve':
                if(op == "*"){ // checks the flag for which op it is
                        sec_num = display.textContent;
                        result = parseInt(first_num) * parseInt(sec_num);
                        first_num = "";
                        sec_num = "";
                        prepared_display.textContent = "";
                        display.textContent = result.toString();
                }
                break;
            default:
                digit_input(button, display, calculator);
                let num = display.textContent;
        }
    }
})
