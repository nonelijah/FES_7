const avengers = ["spiderman", "ironman", "hulk", "thor"];
console.log(avengers);

// splice

// 삭제
avengers.splice(3, 1); //avengers.splice(3)
console.log(avengers);
// 추가
avengers.splice(2, 0, "blackwidow");
console.log(avengers);
// 변경
avengers.splice(1, 1, "hulk");
console.log(avengers);

// slice
console.log(avengers.slice(0, 2));
console.log(avengers);

//sort
console.log(avengers.sort());
const numbers = [1, 3, 72, 41, 32];
numbers.sort((a, b) => a - b, 0);
console.log(numbers);

const arr = ["나", "가", "사", "바"];
arr.sort(function (a, b) {
    // return a - b
    if (a < b) {
        return -1;
    } else if (b < a) {
        return 1;
    } else {
        return 0;
    }
});
console.log(arr);

// forEach

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

studentList.forEach(function (item) {
    console.log(item.name);
});

// 다음 배열에서 score 의 값들만 모아 새로운 배열로 반환해봅시다! 이때 score 값에 하트💖를 추가합니다.
// forEach
let score = [];
studentList.forEach(function (item) {
    score.push(item.score + "💖");
});

console.log(score);
// map
const arrScore = studentList.map(function (item) {
    return item.score + "💖";
});
