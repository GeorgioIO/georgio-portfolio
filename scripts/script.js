const burgerMenu = document.querySelector(".burger-menu");
const CloseSidebarButton = document.querySelector(".close-sidebar");
const projectTogglerButton = document.querySelectorAll(".project-toggler"); /* Get project toggler button*/
const switchers = document.querySelectorAll(".testimonial-switcher");
const projectChoiceBtns = document.querySelectorAll("#rb1");
const upToggler = document.querySelector(".up")
const togglerImage = document.querySelector(".toggler")



// TITLE : EVENT LISTENERS
burgerMenu.addEventListener("click", toggleSidebar);

// -SUB EVENT LISTENERS- HANDLE THE UP TOGGLER
upToggler.addEventListener("click" , () => {
    window.scroll({
        top : 0,
        behavior : 'smooth'
    });
});

// -SUB EVENT LISTENERS- HANDLE THE THEME TOGGLER 
togglerImage.addEventListener("click" , (event) => {
    let imageSrc = event.target.getAttribute("src");
    
    if(imageSrc === "./images/dark-mode.svg")
    {
        event.target.setAttribute("src" , "./images/light-mode.svg");
        document.documentElement.setAttribute('data-theme', "light");
    }
    else
    {
        event.target.setAttribute("src" , "./images/dark-mode.svg");
        document.documentElement.setAttribute('data-theme', "dark");
    }
});

// -SUB EVENT LISTENERS- HANDLER FOR RADIO BUTTONS IN CONTACT FORM
projectChoiceBtns.forEach(radio => {
    radio.addEventListener("click" , (event) => {
        const projectDiv = document.querySelector(".project-fields");
        if (event.target.value == "project")
        {
            projectDiv.style.display = "flex";
            projectDiv.classList.add("expand-project-fields");   
        }
        else
        {
             
            projectDiv.style.display = "none";
            projectDiv.classList.add("collapse-project-fields"); 
            projectDiv.classList.remove("expand-project-fields");   
             

        }
    })
})


// -SUB EVENT LISTENERS- HANDLERS FOR SWITCHERS TESTIMONIALS
switchers.forEach(switcher => {
    switcher.addEventListener("click" , () => {
        removeSwitchActClass(event.target , switchers);
        const testimonials = document.querySelectorAll(".testimonial")
        console.log(testimonials)
        toggleTestimonials(event.target , testimonials);

    })
});

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

// -SUB FUNCTION- FUNCTION TO CHANGE BETWEEN TESTIMONIALS
function toggleTestimonials(targetedSwitch , testimonials)
{
    const targetedValue = targetedSwitch.dataset.name;

    testimonials.forEach(testimonial => {
        if(testimonial.id === targetedValue)
        {
            testimonial.style.display = "flex";
        }
        else
        {
            testimonial.style.display = "none";
        }
    });
}
// -SUB FUNCTIONS- FUNCTION TO REMOVE SWITCH-ACTIVE CLASS FROM NOT CLICKED BUTTONS
function removeSwitchActClass (targetedSwitch , switchers)
{
    const targetedValue = targetedSwitch.dataset.name

    switchers.forEach(switcher => {
        if (targetedValue == switcher.dataset.name)
        {
            switcher.classList.add("switcher-active");
        }
        else
        {
            switcher.classList.remove("switcher-active");
        } 
    });
}