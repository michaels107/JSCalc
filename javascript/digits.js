/*Created 7/3/2020 by Duytan Tran
* Relevant logic and generation for all 10 calculator digit buttons*/
for(let i = 9; i >= 0; i--)
{
    developButton("digits", i, "digit", e => {
        const display = document.getElementsByClassName("display")[0];
        if(display.innerHTML == "0"){
            display.innerHTML = e.target.textContent;
        } else {
            display.innerHTML += e.target.textContent;
        }
    });
}