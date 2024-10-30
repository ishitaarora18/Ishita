function loadingamnimation(){
    gsap.from(".mainheading p",{
        y:100,
        opacity:0,
        delay:0.5,
        duration:0.9,
        stagger:0.7
    })
}
loadingamnimation();

const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

const toggleButton = document.getElementById("toggleButton");

toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("darkmode");
    // Change button text based on current mode
    if (document.body.classList.contains("darkmode")) {
        toggleButton.textContent = "Light";
    } else {
        toggleButton.textContent = "Dark";
    }
});
