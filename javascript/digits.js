/*Created 7/3/2020 by Duytan Tran
* Edited 7/8/2020 by Duytan Tran: added digits.newInput conditional to avoid appending digits after operations
* Relevant logic and generation for all 10 calculator digit buttons*/
for(let i = 9; i >= 0; i--)
{
    developButton("digits", i, "digit", e => {
        const display = document.getElementsByClassName("display")[0];
        if(display.innerHTML == "0" || digits.newInput){
            display.innerHTML = e.target.textContent;
            digits.newInput = false;
        } else {
            display.innerHTML += e.target.textContent;
        }
    });
}