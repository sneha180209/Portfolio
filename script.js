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
    // e1.style.display="none";
    
} else {
    // e1.style.display="flex";
    // e1.innerHTML = "<span class='material-icons'>arrow_backward_ios</span>";
    e2.setAttribute("hidden", "true");
    e3.setAttribute("hidden", "true");
    e4.setAttribute("hidden", "true");

}
}
