import { userInterface } from "./gui";

const mainContainer = document.getElementById("main-container");

let gui = userInterface();

mainContainer.appendChild(gui.pageHeader());
mainContainer.appendChild(gui.sideBar());
mainContainer.appendChild(gui.pageFooter());

// console.log(userText.pageHeader);