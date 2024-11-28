const burgerMenu = document.querySelector(".burger-menu");
const CloseSidebarButton = document.querySelector(".close-sidebar");
const projectTogglerButton = document.querySelectorAll(".project-toggler"); /* Get project toggler button*/




// TITLE : EVENT LISTENERS
burgerMenu.addEventListener("click", toggleSidebar);

// -SUB EVENT LISTENERS- HANDLER TO LISTEN FOR CLICKS ON PROJECT TOGGLERS
projectTogglerButton.forEach(button => {
    button.addEventListener("click" , (event) => {
        let buttonId = "." + event.target.id
        // TOGGLE PROJECT SECTION
        const clientsProjects = document.querySelector(".projects-container-clients");
        const selfProjects = document.querySelector(".projects-container-self");

        
        if (buttonId === ".clients-project")
        {
            let targetDiv = document.querySelector(buttonId)
            targetDiv.classList.add("active")
            targetDiv.nextElementSibling.classList.remove("active")

            clientsProjects.classList.add("visible-projects");
            clientsProjects.classList.remove("hidden-projects");

            selfProjects.classList.add("hidden-projects");
            selfProjects.classList.remove("visible-projects");

        }
        else
        {
            let targetDiv = document.querySelector(buttonId)
            targetDiv.classList.add("active")
            targetDiv.previousElementSibling.classList.remove("active")

            selfProjects.classList.add("visible-projects");
            selfProjects.classList.remove("hidden-projects");

            clientsProjects.classList.add("hidden-projects");
            clientsProjects.classList.remove("visible-projects");
        }
        
    })
})

// -SUB EVENT LISTENERS- HANDLER TO CLOSE THE SIDEBAR
CloseSidebarButton.addEventListener("click" , (event) => {
    const sideBar = document.querySelector("#sidebar");
    if (!sideBar) {
        console.error("Sidebar element not found!");
    }
    
    let sideBarDisplay = window.getComputedStyle(sideBar).display;

    if(sideBarDisplay === "flex")
    {
        burgerMenu.addEventListener("click", toggleSidebar);
        sideBar.style.display = "none";
    }
});

// TITLE : FUNCTIONS

// -SUB FUNCTIONS- FUNCTION FOR THE BURGER MENU
function toggleSidebar ()
{
    const sideBar = document.querySelector("#sidebar");
    let sideBarDisplay = window.getComputedStyle(sideBar).display;

    if(sideBarDisplay === "flex")
    {
        
        sideBar.style.display = "none";
    }
    else if(sideBarDisplay === "none")
    {
        burgerMenu.removeEventListener("click", toggleSidebar);
        sideBar.style.display = "flex";
    }
}