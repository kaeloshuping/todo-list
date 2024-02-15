// this factory is in charge of creating the page side bar 
// as well as modifications related to the side bar
function sideBar() {
    
    // create side bar container
    const sideBarContainer = makeElement("div", "side-bar");

    // create unordered list for upper side bar items
    const taskSelectors = makeElement("ul", "task-selector");

    // declare upper side bar items and add them to class list
    const home = makeElement("li", "all-tasks", "Home");
    home.classList = "upper-sidebar";

    const todayTasks = makeElement("li", "today-tasks", "Todays Tasks");
    todayTasks.classList = "upper-sidebar";

    const upcomingTasks = makeElement("li", "upcoming-tasks", "Upcoming Tasks");
    upcomingTasks.classList = "upper-sidebar";

    const completedTasks = makeElement("li", "completed-tasks", "Completed Tasks");
    completedTasks.classList = "upper-sidebar";

    // append elements to upper side bar container
    appendElements(taskSelectors, home);
    appendElements(taskSelectors, todayTasks);
    appendElements(taskSelectors, upcomingTasks);
    appendElements(taskSelectors, completedTasks);

    // create horizontal rule to divide side bar containers
    const hr = makeElement("hr");

    // create container for list of projects
    const projectsList = makeElement("div", "projects-list");

    const projectsHeader = makeElement("h4", "projects-header", "PROJECTS");

    // declare empty array for projects to be added
    const projects = [];

    // create button to add new projects to projects list
    const newProjectBtn = makeElement("button", "new-project-btn", "+ New Project");

    // append elements to side bar Projects container
    appendElements(projectsList, projectsHeader);
    appendElements(projectsList, newProjectBtn);

    // append elements to side bar main container
    appendElements(sideBarContainer, taskSelectors);
    appendElements(sideBarContainer, hr);
    appendElements(sideBarContainer, projectsList);

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

    // this function takes a container element and child element as 
    // arguments and appends the child to the container
    function appendElements(container, child) {
        container.appendChild(child);

        return container;
    };

    (function createNewProject() {
        newProjectBtn.addEventListener("click", () => {
            const projectName = prompt("Project Name");
            const newProject = makeElement("div", "", projectName);
            newProject.classList = "projects";
            projectsList.insertBefore(newProject, newProjectBtn);
        });
    })();
    
    return { sideBarContainer, makeElement, appendElements };
};


export { sideBar };