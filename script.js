function btnarrow() {
    let e1 = document.querySelector(".btnarr");  
    let e0 = document.querySelector(".btnarr1"); 
    let e2 = document.querySelector(".btn2");
    let e3 = document.querySelector(".btn3");
    let e4 = document.querySelector(".btn4");
    let x = document.querySelector(".btn");

   if (e2.hasAttribute("hidden")) {
    e2.removeAttribute("hidden");
    e3.removeAttribute("hidden");
    e4.removeAttribute("hidden");
    e1.innerHTML = "Tech Links<span class='material-icons'>chevron_left</span>";
    e0.style.width="400px";
    // e0.style.transition="width 0.5s ease-in-out";
    
} else {
    e0.style.transition="width 0.5s";
    e0.style.width="0px";
    e1.innerHTML = "Tech Links<span class='material-icons'>chevron_right</span>";
    
    e2.setAttribute("hidden", "true");
    e3.setAttribute("hidden", "true");
    e4.setAttribute("hidden", "true");

}
}


function scrollToSection1() {
    const section = document.querySelector(".middle1");
    if (section) {
        section.scrollIntoView({ behavior: "smooth" });
    }
}

function scrollToSection2() {
    const section = document.querySelector(".middle2");
    if (section) {
        section.scrollIntoView({ behavior: "smooth" });
    }
}

function scrollToSection3() {
    const section = document.querySelector(".middle3");
    if (section) {
        section.scrollIntoView({ behavior: "smooth" });
    }
}

function scrollToSection4() {
    const section = document.querySelector(".middle4");
    if (section) {
        section.scrollIntoView({ behavior: "smooth" });
    }
}

function scrollToSection5() {
    const section = document.querySelector(".middle5");
    if (section) {
        section.scrollIntoView({ behavior: "smooth" });
    }
}

function scrollToSection6() {
    const section = document.querySelector(".footer");
    if (section) {
        section.scrollIntoView({ behavior: "smooth" });
    }
}

window.addEventListener("scroll", function() {
    const header = document.querySelector(".header");
    if (window.scrollY > 150) { // Adjust this value as needed
        header.classList.add("active");
    } else {
        header.classList.remove("active");
    }
});

function emailto() {
    var email = 'sneha.gupta180902@gmail.com';
    var subject = 'Subject of the email';
    var body = 'Body of the email';

    var mailtoLink = 'mailto:' + email + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);

    window.location.href = mailtoLink;

}