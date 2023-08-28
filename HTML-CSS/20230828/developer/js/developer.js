// path

// 변수선언
const path = document.querySelector("#path"),
    pathLength = path.getTotalLength(),
    btnOpen = document.querySelector(".btn-open");

// 스크롤에 따른 path 구현
path.style.strokeDasharray = `${pathLength} ${pathLength}`;
path.style.strokeDashoffset = pathLength;

// scroll
function scrollHandler() {
    // 현재 스크롤 위치
    const scrollTop = document.documentElement.scrollTop,
        // 전체 스크롤
        scrollHeight = document.documentElement.scrollHeight,
        // 뷰포트 높이
        clientHeight = document.documentElement.clientHeight,
        // 스크롤 비율
        scrollPercentage = scrollTop / (scrollHeight - clientHeight),
        // 그려지는 위치
        drawLength = pathLength * scrollPercentage;

    path.style.strokeDashoffset = pathLength - drawLength;
    btnOpen.style.opacity = scrollPercentage;

    if (scrollPercentage > 0.7) {
        btnOpen.disabled = false;
    } else {
        btnOpen.disabled = true;
    }
}

window.addEventListener("scroll", scrollHandler);

// modal 열기/닫기
const modal = document.querySelector(".modal"),
    btnClose = document.querySelector(".btn-close"),
    dim = document.querySelector(".dim");

function openModal() {
    modal.classList.add("active");
    document.documentElement.style.overflow = "hidden";
}
function closeModal() {
    modal.classList.remove("active");
}

btnOpen.addEventListener("click", openModal);
btnClose.addEventListener("click", closeModal);
dim.addEventListener("click", closeModal);

// 키보드접근성
const focusableEl = modal.querySelectorAll("a, button, input"),
    firstEl = focusableEl[0],
    lastEl = focusableEl[focusableEl.length - 1];

function handleKeys(e) {
    const activeEl = document.activeElement;
    if (e.key === "Tab") {
        if (e.shiftkey) {
            if (activeEl === firstEl) {
                e.preventDefault();
                lastEl.focus();
            }
        } else if (activeEl === lastEl) {
            e.preventDefault();
            firstEl.focus();
        }
    }
    if (e.key === "Escape") {
        closeModal();
    }
    // 방향키 구현은 어떻게 하는지 찾아보기
    if (e.key === "ArrowUp" || "ArrowLeft") {
    } else if (e.key === "arrowDown" || "ArrowRight") {
    }
}

modal.addEventListener("keydown", handleKeys);
