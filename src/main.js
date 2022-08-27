const elHamburger = document.getElementById("menu");
const elExit = document.getElementById("exit");
const elList = document.getElementById("list");

elHamburger.addEventListener("click", function () {
    elHamburger.children[0].classList.toggle("hidden");
    elExit.children[0].classList.toggle("hidden");
    elList.classList.add("right-[80px]");
    elList.classList.add("opacity-100");
})

elExit.addEventListener("click", function () {
    elExit.children[0].classList.toggle("hidden");
    elHamburger.children[0].classList.toggle("hidden");
    elList.classList.remove("right-[80px]");
    elList.classList.remove("opacity-100");
})