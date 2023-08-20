// switch문

// let a = 2 + 2;

switch (a) {
    case 3:
        alert("비교하려는 값보다 작습니다.");
        break;
    case 4:
        alert("비교하려는 값과 일치합니다.");
        break;
    case 5:
        alert("비교하려는 값보다 큽니다.");
        break;
    default:
        alert("어떤 값인지 파악이 되지 않습니다.");
}

// if문으로
if (a === 4) {
    alert(`비교하려는 값과 일치합니다.`);
} else if (a === 3) {
    alert(`비교하려는 값보다 작습니다.`);
} else if (a === -5) {
    console.log(`비교하려는 값보다 큽니다.`);
} else {
    alert(`어떤 값인지 파악이 되지 않습니다.`);
}

// case 묶기

// let a = 3;

switch (a) {
    case 4:
        alert("계산이 맞습니다!");
        break;

    case 3: // (*) 두 case문을 묶음
    case 5:
        alert("계산이 틀립니다!");
        alert("수학 수업을 다시 들어보는걸 권유 드립니다.");
        break;

    default:
        alert("계산 결과가 이상하네요.");
}

// 삼항연산자
function getFee(파라미터) {
    return 파라미터 ? "$2.00" : "$10.00";
}

function getFee(파라미터) {
    if (파라미터) {
        return "$2.00";
    } else {
        return "$10.00";
    }
}

// return
function checkNum(num) {
    for (let index = 0; index < 100; index++) {
        console.log(index);
        if (num === index) {
            console.log("범위안에 값이 있습니다.");
            return "빨리 끝났다";
        }
    }
    return "아 끝났다";
}

console.log(checkNum(30));

// Destructuring

// 배열
const arr = [1, 2, 3];
console.log(arr);
const [a, b, c] = arr;

// 객체
// var o = { p: 42, q: true };
var o = { age: 42, name: "hello" };
// 구조분해할당할때 {원래키값:내가쓸변수명,원래키값:내가쓸변수명}
var { name: 이름, age: 나이 } = o;

console.log(나이); // 42
console.log(이름); // true

// 화살표 함수
const 함수명 = (파라미터) => {
    return 파라미터 * 2;
};
const 함수명2 = (파라미터) => 파라미터 * 2;
console.log([1, 2, 3, 4, 5].map((파라미터) => 파라미터 * 2));
