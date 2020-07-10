/*Created 7/3/2020 by Duytan Tran
Edited  7/8/2020 by Reema Gupta: Added the Decimal Button
Edited 7/8/2020 by Reema Gupta: Added the Equal and Mathematical operation generation
Edited 7/9/2020 by Reema Gupta: added case  when only one number, and operator is pressed
Edited 7/9/2020 by Duytan Tran: mod button and cleaner single number case, accumulator
* Relevant logic and generation for calculator basic buttons: clear & equals*/

/*Created 7/3/2020 by Duytan Tran
  Edited 7/92/2020 by Duytan Tran: display restored to 0
  Clear button generation*/
developButton("basic", 'c', "clear", e => {
    const display = document.getElementsByClassName("display")[0];
    const preparedDisplay = document.getElementsByClassName("prepared_display")[0];
    display.innerHTML = '0';
    preparedDisplay.innerHTML = '';
});


/*
Created 7/8/2020 By Reema Gupta
Edited 7/9/2020 by Duytan Tran: added mod button, maintain display value
Edited 7/9/2020 by Duytan Tran: implemented solution upon picking a operation after inputting second number
Basic operator button generation
 */
let op_arr = ["+","-","/","*", "%"];
for( let i=0;i<op_arr.length;i++)
    developButton("ops",op_arr[i], "op_set", e => {
        const display = document.getElementsByClassName("display")[0];
        const preparedDisplay = document.getElementsByClassName("prepared_display")[0];
        preparedDisplay.innerHTML += " " + op_arr[i] + " ";
        display.innerHTML = "0";
    });

/*
Created 7/8/2020 By Reema Gupta
Edited 7/9/2020 By Reema Gupta: added case  when only one number, and operator is pressed
Edited 7/9/2020 by Duytan Tran: Single number case covered in operator button generation, added accumulator logic
Edited 7/9/2020 by Duytan Tran: moved implementation into its own function so that it can be called in operations too
Equal button Generation and mathematical operation
 */
developButton("basic","=","equals", e => {
    solve();
});

/*
Created 7/9/2200 by Duytan Tran
Execution of outputting the answer to the display when the calculator has two numbers and an operand
*/
function solve(){
    const display = document.getElementsByClassName("display")[0];
    const preparedDisplay = document.getElementsByClassName("prepared_display")[0];
    // Checks whether accumulating or new operation and acts accordingly
    if (digits.accumulate && !noMatches(display.innerHTML + digits.accumulateHalf)) {
        display.innerHTML = evaluateMath(display.innerHTML + digits.accumulateHalf);
        preparedDisplay.innerHTML = "";
    } else {
        //prepare consequent equal buttons presses for accumulator
        digits.accumulateHalf = preparedDisplay.innerHTML.charAt(preparedDisplay.innerHTML.length - 2) + display.innerHTML;
        digits.accumulate = true;
        display.innerHTML = evaluateMath(preparedDisplay.innerHTML);
        preparedDisplay.innerHTML = "";
    }
}

/*
Created 7/8/2020 By Reema Gupta
Edited 7/9/2020 by Duytan Tran: fully backspaced values restore to 0
Backspace button Generation
*/
developButton("basic","<-","Backspace", e => {
    const display = document.getElementsByClassName("display")[0];
    if (display.innerHTML.length > 1){
        display.innerHTML = display.innerHTML.slice(0, -1);
    }else{
        display.innerHTML="0";
    }
});

/*Created 7/9/2020 by Reema Gupta
Decimal Button Generation
*/
developButton("basic",".","Decimal", e => {
    const display = document.getElementsByClassName("display")[0];
    const preparedDisplay = document.getElementsByClassName("prepared_display")[0];
    preparedDisplay.innerHTML += e.target.textContent;
    display.innerHTML += ".";
});
