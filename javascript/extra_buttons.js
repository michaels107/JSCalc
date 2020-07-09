/*Created 7/7/2020 by Sean Michaels
* Generation of the extra buttons.*/

/*
    Created 7/7/2020 by Sean Michaels
    Pi button generation
*/
developButton("extra", 'π', "pi", e => {
    const display = document.getElementsByClassName("display")[0];
    display.innerHTML = 3.14159265359;
});

/*
    Created 7/7/2020 by Sean Michaels
    Sign button generation
*/
developButton("extra", '+/-', "sign", e => {
    const display = document.getElementsByClassName("display")[0];
    if(display.innerHTML > 0){
        display.innerHTML = -display.innerHTML;
    }else {
        display.innerHTML = Math.abs(display.innerHTML);
    }
});

/*
    Created 7/7/2020 by Sean Michaels
    e button generation
*/
developButton("extra", 'e', "euler's", e => {
    const display = document.getElementsByClassName("display")[0];
    display.innerHTML = 2.71828;
});
/*
    Created 7/7/2020 by Sean Michaels
    square root button generation
*/
developButton("extra", '√x', "square_root", e => {
    const display = document.getElementsByClassName("display")[0];
    display.innerHTML = Math.sqrt(display.innerHTML);
});
