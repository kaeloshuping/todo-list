const userInterface = function() {
    const pageHeader = function() {
        const headerContainer = document.createElement("div");
        headerContainer.id = "page-header";

        const headerText = document.createElement("div");
        headerText.id = "header-text";
        headerText.innerHTML = "To Do List"

        headerContainer.appendChild(headerText);

        return headerContainer;
    };

    const sideBar = function() {    
        const sideBarContainer = document.createElement("div");
        sideBarContainer.id = "side-bar"; 

        const taskSelectors = document.createElement("ul");
        taskSelectors.id = "task-selector";

        const home = document.createElement("li");
        home.id = "all-tasks";
        home.innerHTML = "Home";

        const todayTasks = document.createElement("li");
        todayTasks.id = "today-tasks";
        todayTasks.innerHTML = "Todays Tasks";

        const upcomingTasks = document.createElement("li");
        upcomingTasks.id = "upcoming-tasks";
        upcomingTasks.innerHTML = "Upcoming Tasks";

        const completedTasks = document.createElement("li");
        completedTasks.id = "completed-tasks";
        completedTasks.innerHTML = "Completed Tasks";

        taskSelectors.appendChild(home);
        taskSelectors.appendChild(todayTasks);
        taskSelectors.appendChild(upcomingTasks);
        taskSelectors.appendChild(completedTasks);

        const hr = document.createElement("hr");

        sideBarContainer.appendChild(taskSelectors);
        sideBarContainer.appendChild(hr);
        
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
