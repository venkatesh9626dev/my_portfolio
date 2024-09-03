var hamburger = document.getElementById("hamburger")
var nav_phone = document.getElementById("nav-items")





function change_nav (){

    // creating button 

    var close_btn = document.createElement("button")
    close_btn.textContent = "Close"
    close_btn.classList.add("close_btn")
    close_btn.onclick = function (){

    close_nav(close_btn);
    
    }
        
    hamburger.style.display = "none" //removing hamburger btn
    
    

    //inserting button

    nav_phone.insertAdjacentElement("afterbegin",close_btn)

    //making nav container as block

    nav_phone.className = "nav-phone" //assigning new class name
    nav_phone.style.display = "block"

    

}

/* To close the nav bar*/

function close_nav (close_btn){
    
    nav_phone.style.display = "none"
    hamburger.style.display = "block"
    close_btn.remove()
   

}

/* To change topics in about section */

let hobbies = document.getElementById("hobbies-container")
let skills = document.getElementById("about_skills_container")
let education = document.getElementById("education-container")

function hobbies_function(){

    hobbies.classList.add("opacity-grow")
    skills.classList.remove("opacity-grow")
    education.classList.remove("opacity-grow")

}

function skills_function(){

    skills.classList.add("opacity-grow")
    hobbies.classList.remove("opacity-grow")
    education.classList.remove("opacity-grow")
    
   
}

function education_function(){

    hobbies.classList.remove("opacity-grow")
    skills.classList.remove("opacity-grow")
    education.classList.add("opacity-grow")
}

/* scroll-Animation */

/* about-section*/

/* For mobile */

let = window_width = window.innerWidth;

if(window_width <= 734){

    let about_section = document.getElementById("about-section")

    window.addEventListener('scroll',function(){
    
        let position_scroll = window.scrollY;
        console.log(position_scroll)
    
        if (position_scroll >= 114){
            about_section.setAttribute('class','opacity-grow-2');
        }
        else{
            about_section.classList.remove("opacity-grow-2")
        }
    
    })
}

/*for laptop */

if(window_width >= 734){
    let about_section = document.getElementById("about-section")

    window.addEventListener('scroll',function(){

        let position_scroll = window.scrollY;
        console.log(position_scroll)

        if (position_scroll >= 69){
            about_section.setAttribute('class','opacity-grow-2');
        }
        else{
            about_section.classList.remove("opacity-grow-2")
        }

})
}


/* skills-section*/

/* for mobile */

let = window_width = window.innerWidth;

if(window_width <= 734){

    let skill_section = document.getElementById("skills-section")

    window.addEventListener('scroll',function(){
    
        let position_scroll = window.scrollY;
        console.log(position_scroll)
    
        if (position_scroll >= 1106){
            skill_section.setAttribute('class','opacity-grow-2');
        }
        else{
            skill_section.classList.remove("opacity-grow-2")
        }
    
    })
}

/* for laptop */

if(window_width >= 734){
    let skill_section = document.getElementById("skills-section")

    window.addEventListener('scroll',function(){

        let position_scroll = window.scrollY;
        console.log(position_scroll)

        if (position_scroll >= 703){
            skill_section.setAttribute('class','opacity-grow-2');
        }
        else{
            skill_section.classList.remove("opacity-grow-2")
        }

})
}

/* projects section */

/* mobile design */


let = window_width = window.innerWidth;

if(window_width <= 734){

    let projects_section = document.getElementById("projects-section")

    window.addEventListener('scroll',function(){
    
        let position_scroll = window.scrollY;
        console.log(position_scroll)
    
        if (position_scroll >= 2496){
            projects_section.setAttribute('class','opacity-grow-2');
        }
        else{
            projects_section.classList.remove("opacity-grow-2")
        }
    
    })
}

/* laptop design */


if(window_width >= 734){
    let projects_section = document.getElementById("projects-section")

    window.addEventListener('scroll',function(){

        let position_scroll = window.scrollY;
        console.log(position_scroll)

        if (position_scroll >= 1234){
            projects_section.setAttribute('class','opacity-grow-2');
        }
        else{
            projects_section.classList.remove("opacity-grow-2")
        }

})
}

