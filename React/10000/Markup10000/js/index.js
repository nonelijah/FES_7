function theRule() {
    const app = document.querySelector("#app");
    const main = app.querySelector(".main");
    const inpMajor = main.querySelector("#inp-major");
    const inpTime = main.querySelector("#inp-time");
    const btnExc = main.querySelector(".btn-exc");
    const result = main.querySelector(".cont-result");
    const outpMajor = result.querySelector("#output-major");
    const outpTime = result.querySelector("#output-time");

    function timerRender(e) {
        e.preventDefault();
        if (inpMajor.value === "") {
            alert("전문가가 되고 싶은 분야를 작성해주세요.");
            inpMajor.focus();
            return;
        } else if (inpTime.value === "") {
            alert("전문가가 되기 위해 훈련할 시간을 작성해주세요.");
            inpTime.focus();
            return;
        } else {
            outpMajor.textContent = inpMajor.value;
            outpTime.textContent = Math.ceil(10000 / parseInt(inpTime.value));
            result.classList.add("on");
        }
    }

    const btnGo = result.querySelector(".btn-go");
    const modal = app.querySelector(".modal");
    const modalWrap = modal.querySelector(".modal-wrap");
    const btnClose = modalWrap.querySelector(".btn-close");

    function modalShow(e) {
        e.preventDefault();
        modal.classList.add("on");
    }

    function modalDown() {
        modal.classList.remove("on");
    }

    btnExc.addEventListener("click", timerRender);
    btnGo.addEventListener("click", modalShow);
    btnClose.addEventListener("click", modalDown);
}

theRule();
