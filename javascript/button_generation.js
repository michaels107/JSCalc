/*Created 7/3/2020 by Duytan Tran
* Javascript function for the generation of calculator buttons*/

/*Created 7/3/2020 by Duytan Tran
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
    parent.appendChild(button);
}