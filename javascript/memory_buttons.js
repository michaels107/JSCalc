/*Created 7/7/2020 by Sean Michaels
* Edited 7/8/2020 by Duytan Tran: Additional documentation, bug/logic fixes, update mem button function
* Generation of the memory_buttons buttons.*/

/* Creating memory_buttons object to store the array of multiple memory_buttons stored. */
let last_val = 0;
let button_count = 0;

/*
    Created 7/7/2020 by Sean Michaels
    Edited 7/8/2020 by Duytan Tran: All buttons on memory display have same name attribute,
                                    last_val is given a float value instead of string
    Memory Set button generation
*/
developButton("memory", 'MS', "mem_set", e => {
    const display = document.getElementsByClassName("display")[0];
    last_val = parseFloat(display.innerHTML);

    /* Memory button generation in display */
    developButton("mem_display", last_val, 'mem', e => {
        display.innerHTML = e.target.innerHTML;
    });
    button_count++;
});

/*
    Created 7/7/2020 by Sean Michaels
    Memory Recall button generation
*/
developButton("memory", 'MR', "mem_recall", e => {
    const display = document.getElementsByClassName("display")[0];
    display.innerHTML = last_val;
});

/*
    Created 7/7/2020 by Sean Michaels
    Edited 7/8/2020 by Duytan Tran: Added call to updateMemoryButton
    Memory Addition button generation
*/
developButton("memory", 'M+', "mem_add", e => {
    const display = document.getElementsByClassName("display")[0];
    last_val += parseFloat(display.innerHTML);
    updateMemoryButton();
});

/*
    Created 7/7/2020 by Sean Michaels
    Edited 7/8/2020 by Duytan Tran: Added call to updateMemoryButton
    Memory Subtraction button generation
*/
developButton("memory", 'M-', "mem_sub", e => {
    const display = document.getElementsByClassName("display")[0];
    last_val -= parseFloat(display.innerHTML);
    updateMemoryButton();
});

/*
    Created 7/7/2020 by Sean Michaels
    Edited 7/8/2020 by Duytan Tran: Added call to updateMemoryButton
    Memory Multiply button generation
*/
developButton("memory", 'M*', "mem_mult", e => {
    const display = document.getElementsByClassName("display")[0];
    last_val *= parseFloat(display.innerHTML);
    updateMemoryButton();
});

/*
    Created 7/7/2020 by Sean Michaels
    Edited 7/8/2020 by Duytan Tran: Added call to updateMemoryButton
    Memory Divide button generation
*/
developButton("memory", 'M/', "mem_div", e => {
    const display = document.getElementsByClassName("display")[0];
    if(display.innerHTML == 0){
        window.alert("Tried to divide by zero.")
    }else {
        last_val /= parseFloat(display.innerHTML);
    }
    updateMemoryButton();
});

/*
    Created 7/7/2020 by Sean Michaels
    Edited 7/8/2020 by Duytan Tran: Reset last_val/button_count to 0, retrieves display mem buttons
    Memory clear button generation
*/
developButton("memory", 'MC', "mem_clear", e => {
    let elements = document.getElementsByName("mem");
    while(elements.length > 0) {
        deleteButton(elements[elements.length-1])
    }
    last_val = 0;
    button_count = 0;
});

/*
    Created 7/8/2020 by Duytan Tran
    Updates latest memory button on memory display to match memory operations performed
*/
function updateMemoryButton(){
    const latest_mem = document.getElementsByName("mem")[button_count - 1];
    latest_mem.innerHTML = last_val;
}