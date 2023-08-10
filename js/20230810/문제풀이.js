// person의 key와 value를 출력하기
const person = {
    name: "재현",
    age: 20,
    gender: "male",
};

let props = Object.keys(person);

for (let i = 0; i < props.length; i++) {
    console.log(`key: ${props[i]}, value: ${person[props[i]]}`);
}

// while을 이용하기
// 사용자가 입력한 메뉴 번호에 따라 해당하는 메뉴 이름과 가격을 출력합니다. 만약 종료 번호를 누르면 ‘종료합니다’ 를 콘솔에 출력합니다.
const menu = [
    { name: "아메리카노", price: 2000 },
    { name: "카페라떼", price: 2500 },
    { name: "카페모카", price: 2800 },
    { name: "핫초코", price: 3000 },
    { name: "과일주스", price: 3500 },
];

// sort
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

student.sort(function (a, b) {
    if (a.product < b.product) {
        return -1;
    } else if (a.product > b.product) {
        return 1;
    } else {
        return 0;
    }
});
