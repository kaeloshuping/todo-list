import { userInterface } from "./gui";

const mainContainer = document.getElementById("main-container");

let userText = userInterface();

mainContainer.appendChild(userText.pageHeader);

console.log(userText.pageHeader);