// 전개 구문 (Spread syntax)

// 배열의 전개 구문
const 과일들 = ["사과", "파인애플", "수박"];
const 생선들 = ["조기", "갈치", "다금바리"];
const 합치면 = [...과일들, ...생선들];

console.log(합치면);

// const 과일들 = ["사과", "파인애플", "수박"];
const 과일들2 = [...과일들];
과일들2.push("키위");

console.log(`${과일들2} & ${과일들}`);

// 객체의 전개 구문
const 위니브1 = { 개리: 1, 빙키: 2 };
const 위니브2 = { 라이캣: 3 };
const 위니브3 = { ...위니브1, ...위니브2 };

console.log(위니브3);

const me = { name: "재현", address: "제주" };
const clonedMe = { ...me };
clonedMe.age = 22;

console.log(`${Object.keys(me)} & ${Object.keys(clonedMe)}`);

// const me = { name: "재현", address: "제주" };
const newAddress = { address: "서귀포시" };
const newMe = { ...me, ...newAddress };

console.log(newMe);

//  디스트럭쳐링 (destructuring)

// 디스트럭쳐링 기본 구조
let obj = { one: 1, two: 2 };
let myNum = obj.one;
console.log(myNum);
/*
let obj = {one: 1, two : 2};
let {one: myNum} = obj;
console.log(myNum);
*/

/**
 // 수동적인 디스트럭쳐링
let food1, food2, food3;

const categories = {food1 : '과일', food2 : '채소', food3 : '육류'};

food1 = categories.food1;
food2 = categories.food2;
food3 = categories.food3;
*/

const { food1, food2, food3 } = { food1: "과일", food2: "채소", food3: "육류" };

console.log(food1, food2, food3);

// 배열의 디스트럭쳐링
const arr = [1, 2, 3];

const [a, b, c] = arr;

console.log(a); // 1
console.log(b); // 2
console.log(c); // 3

// 함수의 디스트럭쳐링

function myFunc([a, b]) {
    console.log(a);
    console.log(b);
}

// const arr = [1, 2, 3];

myFunc(arr);
