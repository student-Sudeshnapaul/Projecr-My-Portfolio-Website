var typed = new Typed(".text", {
    strings: ["to my portfolio!", "to my portfolio!", "to my portfolio!"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
document.getElementById("downloadCV").addEventListener("click", function(e) {
    e.preventDefault(); // prevent default link behavior
    const link = document.createElement("a");
    link.href = "./Sudeshna_Paul_CV.pdf";
    link.download = "Sudeshna_Paul_CV.pdf";
    link.click();
});