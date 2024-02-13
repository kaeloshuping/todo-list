// this factory is in charge of creating the header and footer elements
// of the web page
function headerFooter() {
    
    // this function creates the web page header
    function pageHeader() {
        const headerContainer = document.createElement("div");
        headerContainer.id = "page-header";
    
        const headerText = document.createElement("div");
        headerText.id = "header-text";
        headerText.innerHTML = "To Do List"
    
        headerContainer.appendChild(headerText);
    
        return headerContainer;
    };
    
    // this function creates the web page footer
    function pageFooter() {
        const footerContainer = document.createElement("div");
        footerContainer.id = "page-footer";
    
        const footerText = document.createElement("div");
        footerText.id = "footer-text";
        footerText.innerHTML = "Developed by @ Copasetic Demon"
    
        footerContainer.appendChild(footerText);
    
        return footerContainer;
    };

    return { pageHeader, pageFooter };
};

export { headerFooter };