let menu;
let price = 0;

function order() {
    switch (menu) {
        case "아메리카노":
            price = 4000;
            break;
        case "카페라떼":
            price = 5000;
            break;
        case "바닐라라떼":
            price = 6000;
            break;
        case "콜드브루":
            price = 5500;
            break;
        case "딸기라떼":
            price = 7000;
            break;
        case "레몬에이드":
            price = 6500;
            break;
        case "에스프레소":
            price = 3500;
            break;
        case "루이보스":
            price = 4500;
            break;
        default:
            menu = prompt("메뉴를 정확히 입력해주세요.");
            order();
    }
}
if (menu !== 0) {
    console.log(`금액은${price}입니다.`);
}

menu = prompt("메뉴를 입력해주세요");
order();
