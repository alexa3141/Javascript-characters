3;
3; // document.body.children[1].children[0].href = "https://google.com";

let anchorElement = document.getElementById("external-link");
anchorElement.href = "https://google.com";

anchorElement = document.querySelector("a");
anchorElement.href = "https://academind.com";

//add an element

//1. Create the new element

let newAnchorElement = document.createElement("a");
newAnchorElement.href = "https://google.com";
newAnchorElement.textContent = "This leads to Google";

//2. get access to the parent element that should hold the new element
let firstParagraph = document.querySelector("p");

//3. Insert the new element into the parent element content
firstParagraph.append(newAnchorElement);

//Remove elements

//1. Select the elements that should be removed
let fisrtH1Element = document.querySelector("h1");
//2. Remove it
// fisrtH1Element.remove();
fisrtH1Element.parentElement.removeChild(fisrtH1Element); //for older browswers

//Move elements around by selectiong the parent of the place where it should be appended

firstParagraph.parentElement.append(firstParagraph);

//iner html property

firstParagraph.innerHTML;
