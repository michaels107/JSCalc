/*Created 7/3/2020 by Duytan Tran
* Edited 7/7/2020 by Sean Michaels
* Edited 7/8/2020 by Duytan Tran: Additional documentation, added listener to non-digits/non-sign buttons
* Edited 7/9/2020 by Duytan Tran: Added backspace to the newInput conditional, accumulator listener
* Javascript function for the generation of calculator buttons*/

const digits = document.getElementsByName("digits")[0];

/*Created 7/3/2020 by Duytan Tran
* Edited 7/8/2020 by Duytan Tran: added listener to non-digits/non-sign buttons so that new digit inputs can be had
*                                 instead of always appending
* Edited 7/9/2020 by Duytan Tran: added listener to non-equals buttons so that accumulator can be implemented
*
* Adds button at designated location in html tree with appropriate attributes,
* content, and event listener.
* @param parentName: string indicating the parent of the button to be inserted
* @param content: string indicating the text between the html button tag
* @param name: string indicating the name attribute of the button
* @param listenerFunction: the function attached to the listener*/
function developButton(parentName, content, name, listenerFunction){
    let parent = document.getElementsByName(parentName)[0];
    let button = document.createElement('BUTTON');
    button.innerHTML = content;
    button.setAttribute("name", name);
    button.addEventListener("click", listenerFunction);

    // Allows a new digit input to be had if a non digit/sign-button/backspace was pressed
    if(name !== 'digit' && name !== 'sign' && name !== 'Backspace'){
        button.addEventListener("click", () =>{
                digits.newInput = true;
        });
    }

    // Allows accumulator logic to be implemented in equals button
    if(name !== 'equals'){
        button.addEventListener("click", () =>{
            digits.accumulate = false;
            digits.accumulateHalf = '';
        })
    }
    parent.appendChild(button);
}

/*
 * Created 7/7/2020 by Sean Michaels
 * Function to delete elements.
 */
function deleteButton(element){
    element.parentElement.removeChild(element);
}
