// 함수 심화

// 구조분해할당을 이용한 아규먼트 처리

function printMe({ name, age, email } = {}) {
    console.log(`이름: ${name}, 나이: ${age}, 이메일: ${email}`);
}

const me = {
    name: "재현",
    age: 25,
    email: "jaehyun@something.com",
};

printMe(me);

// 함수에서 객체를 인자로 전달받는 방법

함수4("Gold", true, true, true, "대화방 전체 백업 가능", true); // 가독성이 떨어진다.

function 함수4({ 회원등급, 글쓰기, 글읽기, 채널관리, 백업, 소셜로그인여부 }) {
    console.log("함수기능");
    console.log(회원등급, 글쓰기, 글읽기, 채널관리, 백업, 소셜로그인여부);
    return;
}

함수4({
    회원등급: "Gold",
    글쓰기: true,
    글읽기: true,
    채널관리: false,
    백업: "부분가능",
    소셜로그인여부: true,
});

// rest 문법

function 함수2(a, b, ...c) {
    console.log(c);
    return Math.max(...c);
}

함수2("hello", "world", 10, 20, 30, 40);

function 함수2([a, b], ...c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

// 매개변수의 초기화

function 함수3(a = 10, b = 20, c = 30) {
    return a + b + c;
}

console.log(함수3());
console.log(함수3(100));
console.log(함수3(100, 200));
console.log(함수3(100, 200, 300));

console.log(함수3((c = 1000)));
// 1050

console.log(함수3((c = 1000), (a = 2000)));
// 3030

// 자바스크립트 Scope

const func1 = function () {
    var a = 1;
    var b = 2;

    console.log(a + b);
};

var a = 20;

func1();
