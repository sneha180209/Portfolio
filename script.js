function btnarrow() {
    let e1 = document.querySelector(".btnarr");   
    let e2 = document.querySelector(".btn2");
    let e3 = document.querySelector(".btn3");
    let e4 = document.querySelector(".btn4");
    let x = document.querySelector(".btn");

   if (e2.hasAttribute("hidden")) {
    e2.removeAttribute("hidden");
    e3.removeAttribute("hidden");
    e4.removeAttribute("hidden");
    e1.innerHTML = "Tech Links<span class='material-icons'>chevron_left</span>";
    e1.style.width="93.1px";
    // e1.style.display="none";
    
} else {
    // e1.style.display="flex";
    e1.innerHTML = "Tech Links<span class='material-icons'>chevron_right</span>";
    // e1.style.width="93.1px";
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

window.addEventListener("scroll", function() {
    const header = document.querySelector(".header");
    if (window.scrollY > 150) { // Adjust this value as needed
        header.classList.add("active");
    } else {
        header.classList.remove("active");
    }
});





