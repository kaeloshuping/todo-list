const userInterface = function() {
    const pageHeader = function() {
        const headerContainer = document.createElement("div");
        headerContainer.id = "page-header";

        return headerContainer;
    };

    const sideBar = function() {    
        const sideBarContainer = document.createElement("div");
        sideBarContainer.id = "side-bar"; 
        
        return sideBarContainer;
    };

    const pageFooter = function() {
        const footerContainer = document.createElement("div");
        footerContainer.id = "page-footer";

        const footerText = document.createElement("div");
        footerText.id = "footer-text";
        footerText.innerHTML = "Developed by @ Copasetic Demon"

        footerContainer.appendChild(footerText);

        return footerContainer;
    };

    return { pageHeader, sideBar, pageFooter };
};

export { userInterface };
