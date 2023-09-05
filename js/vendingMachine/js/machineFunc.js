class MachineFunc {
    constructor() {
        // section 1 요소 선택
        const vMachine = document.querySelector(".section1");
        this.balance = vMachine.querySelector(".bg-box p");
        this.itemList = vMachine.querySelector(".cola-list");
        this.inputCostEl = vMachine.querySelector("#input-money");
        this.btnPut = vMachine.querySelector("#input-money+.btn");
        this.btnReturn = vMachine.querySelector(".bg-box+.btn");
        this.btnGet = vMachine.querySelector(".btn-get");
        this.stagedList = vMachine.querySelector(".get-list");

        // section 2 요소 선택
        const myInfo = document.querySelector(".section2");
        this.myMoney = myInfo.querySelector(".bg-box p");

        // section3 요소 선택
        const getInfo = document.querySelector(".section3");
        this.getList = getInfo.querySelector(".get-list");
        this.txtTotal = getInfo.querySelector(".total-price");
    }

    setup() {
        this.bindEvents();
    }

    // 입금
    inputMoney() {
        console.log("입금");
    }

    // 거스름돈 반환
    change() {
        console.log("거스름돈 반환");
    }

    // 획득
    takeItem() {
        console.log("획득");
    }

    bindEvents() {
        this.btnPut.addEventListener("click", this.inputMoney);

        this.btnReturn.addEventListener("click", this.change);

        this.btnGet.addEventListener("click", this.takeItem);
    }
}

export default MachineFunc;
