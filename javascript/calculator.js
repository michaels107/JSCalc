/*Created 6/30/2020 by Duytan Tran
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
buttons.addEventListener('click', e => {
    if(e.target.matches('button')){
        const button = e.target;
        const action = button.dataset.action;
        switch(action){
            case 'subtract':
                //stub
                break;
            case 'clear':
                clear_input(display, prepared_display);
                break;
            case 'solve':
                //stub
                break;
            default:
                digit_input(button, display, calculator);
        }
    }
})
