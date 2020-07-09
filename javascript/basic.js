/*Created 7/3/2020 by Duytan Tran
Edited on 7/8/2020 by Reema Gupta: Added the Decimal Button
Edited on 7/8/2020 by Reema Gupta: Added the Equal and Mathematical operation generation
* Relevant logic and generation for calculator basic buttons: clear & equals*/

/*Created 7/3/2020 by Duytan Tran
  Clear button generation*/
developButton("basic", 'c', "clear", e => {
    const display = document.getElementsByClassName("display")[0];
    const preparedDisplay = document.getElementsByClassName("prepared_display")[0];
    display.innerHTML = '';
    preparedDisplay.innerHTML = '';
});


/*
Created 7/8/2020 By Reema Gupta
Basic operator button generation
 */

let op_arr=new Array("+","-","/","*");

for( let i=0;i<op_arr.length;i++)
    developButton("ops",op_arr[i], "op_set", e => {
        const display = document.getElementsByClassName("display")[0];
        const preparedDisplay = document.getElementsByClassName("prepared_display")[0];
        preparedDisplay.innerHTML = display.innerHTML + " " + op_arr[i] + " ";
        display.innerHTML = "";
    });
/*
Created 7/8/2020 By Reema Gupta
Equal button Generation and mathematical operation
 */
developButton("basic","=","equals", e => {
    const display = document.getElementsByClassName("display")[0];
    const preparedDisplay = document.getElementsByClassName("prepared_display")[0];
    display.innerHTML = evaluateMath(preparedDisplay.innerHTML+display.innerHTML);
    preparedDisplay.innerHTML=" ";

});
/*
Created 7/8/2020 By Reema Gupta
Backspace button Generation
 */

developButton("basic","<-","Backspace", e => {
    const display = document.getElementsByClassName("display")[0];
    if (display.innerHTML.length >= 1){
        display.innerHTML = display.innerHTML.slice(0, -1);
      }
    else{
        display.innerHTML="";
    }
});

