/*Created 7/7/2020 by Sean Michaels
* Generation of the memory_buttons buttons.*/

/* Creating memory_buttons object to store the array of multiple memory_buttons stored. */
let memory_buttons = [];
let last_val = 0;

/* Memory Set button generation */
developButton("memory", 'MS', "mem_set", e => {
    const display = document.getElementsByClassName("display")[0];
    memory_buttons.unshift(display.innerHTML);
    last_val = display.innerHTML;
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
    const display = document.getElementsByClassName("display")[0];
    memory_buttons = [];
    last_val = 0;
});