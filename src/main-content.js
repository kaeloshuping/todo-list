// this function creates an element on the DOM by taking the element type, element id 
// and element text as arguments
function makeElement(elementType, elementId, elementText) {
    let newElement = document.createElement(elementType);

    if (elementId === undefined) {
        newElement.id = "";
    } else {
        newElement.id = elementId;
    };

    if (elementText === undefined) {
        newElement.innerHTML = "";
    } else {
        newElement.innerHTML = elementText;
    };

    return newElement;
};

// create container for task items
const contentContainer = makeElement("div", "content-container");

export { contentContainer };