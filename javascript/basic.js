/*Created 7/3/2020 by Duytan Tran
* Relevant logic and generation for calculator basic buttons: clear & equals*/

/*Created 7/3/2020 by Duytan Tran
  Clear button generation*/
developButton("basic", 'c', "clear", e => {
    const display = document.getElementsByClassName("display")[0];
    const preparedDisplay = document.getElementsByClassName("prepared_display")[0];
    display.innerHTML = '0';
    preparedDisplay.innerHTML = '';
});


let op_arr=new Array("+","-","/","*");
for( let i=0;i<op_arr.length;i++)
    developButton("ops",op_arr[i], "op_set", e => {
        const display = document.getElementsByClassName("display")[0];


    });
