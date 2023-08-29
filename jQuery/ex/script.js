const viewFrame = document.querySelector(".view-frame");
const ul = document.querySelector(".img-container");
const lis = document.querySelectorAll("li");

// changeImg
function changeImg() {
    const targetLi = document.querySelector("li.selected");
    viewFrame.innerHTML = "";
    viewFrame.innerHTML = targetLi.innerHTML;
}

// clickHandle
function clickHandle() {
    lis.forEach(function (e) {
        const targetLi = this;
        e.classList.remove("selected");
        console.log(this);
    });
}

// keyboardHandle
function keyboardHandle(e) {
    const firstLi = lis[0],
        lastLi = lis[lis.length - 1],
        selectLi = document.querySelector("li.selected"),
        preLi = selectLi.previousElementSibling,
        nextLi = selectLi.nextElementSibling;

    // console.log(e.key);
    if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        selectLi.classList.remove("selected");
        if (selectLi === firstLi) {
            lastLi.classList.add("selected");
        } else {
            preLi.classList.add("selected");
        }
    }
    if (e.key === "ArrowDown" || e.key === "ArrowRight") {
        selectLi.classList.remove("selected");
        if (selectLi === lastLi) {
            firstLi.classList.add("selected");
        } else {
            nextLi.classList.add("selected");
        }
    }
    changeImg();
}

ul.addEventListener("click", clickHandle);
document.addEventListener("keydown", keyboardHandle);
