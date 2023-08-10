// person의 key와 value를 출력하기
const person = {
    name: "재현",
    age: 20,
    gender: "male",
};
/*
const keys = Object.keys(person);
for (let i = 0; i < keys.length; i++) {
    console.log(`person의 ${keys[i]}는 ${person[keys[i]]}이다.`);
}
*/

// 사용자가 입력한 메뉴 번호에 따라 해당하는 메뉴 이름과 가격을 출력합니다. 만약 종료 번호를 누르면 ‘종료합니다’ 를 콘솔에 출력합니다.
const menu = [
    { name: "아메리카노", price: 2000 },
    { name: "카페라떼", price: 2500 },
    { name: "카페모카", price: 2800 },
    { name: "핫초코", price: 3000 },
    { name: "과일주스", price: 3500 },
];

/*
    let input = 0;
    while (input !== 6) {
        input = parseInt(
            prompt(
                "메뉴 번호를 입력해주세요. / 아메리카노 : 1 / 카페라떼 : 2 / 카페모카 : 3 / 핫초코 : 4 / 과일주스 : 5 / 종료하기 : 6 /"
            )
        );

        switch (input) {
            case 1:
                console.log(
                    `입력하신 메뉴는 ${menu[0].name}이고, 가격은 ${menu[0].price}입니다.`
                );
                break;
            case 2:
                console.log(
                    `입력하신 메뉴는 ${menu[1].name}이고, 가격은 ${menu[1].price}입니다.`
                );
                break;
            case 3:
                console.log(
                    `입력하신 메뉴는 ${menu[2].name}이고, 가격은 ${menu[2].price}입니다.`
                );
                break;
            case 4:
                console.log(
                    `입력하신 메뉴는 ${menu[3].name}이고, 가격은 ${menu[3].price}입니다.`
                );
                break;
            case 5:
                console.log(
                    `입력하신 메뉴는 ${menu[4].name}이고, 가격은 ${menu[4].price}입니다.`
                );
                break;
            case 6:
                console.log(`종료합니다.`);
                break;
            default:
                console.log(`잘못 입력하셨습니다.`);
        }
    }
*/

// product 순서대로 정렬해보기
const student = [
    {
        id: 1,
        product: "연필",
        stock: 10,
    },
    {
        id: 2,
        product: "지우개",
        stock: 33,
    },
    {
        id: 3,
        product: "체육복",
        stock: 2,
    },
    {
        id: 4,
        product: "만년필",
        stock: 5,
    },
    {
        id: 5,
        product: "책받침",
        stock: 100,
    },
];

/*
student.sort(function(a,b) {
    if(a.product < b.product) {
        return -1
    } else if (a.product > b.product) {
        return +1
    } else {return 0}
})
*/

// name 출력하기

const studentList = [
    {
        id: 1,
        name: "원범",
        score: "great",
    },
    {
        id: 2,
        name: "김진",
        score: "so cute",
    },
    {
        id: 3,
        name: "혜원",
        score: "good good",
    },
    {
        id: 4,
        name: "재현",
        score: "too cool for school",
    },
];
/*
studentList.forEach(function (item) {
    console.log(item.name);
});
*/

// 다음 배열에서 score 의 값들만 모아 새로운 배열로 반환해봅시다! 이때 score 값에 하트💖를 추가합니다.
/*
const arrScore = studentList.map(function (item) {
    return item.score+ '💖'
})
*/

// lotto 번호 생성기
lottoCre = () => {
    let lotto = [];
    let num;
    while (lotto.length < 6) {
        num = parseInt(Math.random() * 45 + 1);
        if (!lotto.includes(num)) {
            lotto.push(num);
        }
    }
    lotto.sort((a, b) => a - b, 0);
    console.log(lotto);
};
