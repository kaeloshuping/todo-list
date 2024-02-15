import { headerFooter } from "./header-footer";
import { sideBar } from "./side-bar";
import { contentContainer } from "./main-content"; 

function userInterface() {
    const mainContainer = document.getElementById("main-container");

    const pageHeaderFooter = headerFooter();

    const pageSideBar = sideBar();

    mainContainer.appendChild(pageHeaderFooter.pageHeader());
    mainContainer.appendChild(pageSideBar.sideBarContainer);
    mainContainer.appendChild(contentContainer);
    mainContainer.appendChild(pageHeaderFooter.pageFooter());

    return mainContainer;
};

export { userInterface };
