/*Created 7/7/2020 by Sean Michaels
* Generation of the memory_buttons buttons.*/

/* Creating memory_buttons object to store the array of multiple memory_buttons stored. */
let last_val = 0;
let button_count = 0;

/* Memory Set button generation */
developButton("memory", 'MS', "mem_set", e => {
    const display = document.getElementsByClassName("display")[0];
    last_val = display.innerHTML;

    /* Memory button generation in display */
    developButton("mem_display", last_val, last_val, e => {
        display.innerHTML = e.target.name;
    });
    button_count++;
});

/* Memory Recall button generation */
developButton("memory", 'MR', "mem_recall", e => {
    const display = document.getElementsByClassName("display")[0];
    display.innerHTML = last_val;

});

/* Memory Addition button generation */
developButton("memory", 'M+', "mem_add", e => {
    const display = document.getElementsByClassName("display")[0];
    last_val += parseFloat(display.innerHTML);
});

/* Memory Subtration button generation */
developButton("memory", 'M-', "mem_sub", e => {
    const display = document.getElementsByClassName("display")[0];
    last_val -= parseFloat(display.innerHTML);
});

/* Memory Multiply button generation */
developButton("memory", 'M*', "mem_mult", e => {
    const display = document.getElementsByClassName("display")[0];
    last_val *= parseFloat(display.innerHTML);
});

/* Memory Divide button generation */
developButton("memory", 'M/', "mem_div", e => {
    const display = document.getElementsByClassName("display")[0];
    last_val /= parseFloat(display.innerHTML);
});

/* Memory clear button generation */
developButton("memory", 'MC', "mem_clear", e => {
    let elements = document.getElementsByName("mem_list");
    while(elements.length > 0) {
        deleteButton(elements[elements.length-1])
    }
});