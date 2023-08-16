// this
// 객체를 가리키는 참조 변수
// 호출되는 위치에 따라 다른 값을 출력

/ * this */;
function sayName() {
    console.log(this.name);
}

var name = "Hero";
// 전역으로 선언한 name 변수의 앞에는 window 가 생략되어 있습니다.
// 때문에 window.name === "Hero" 가 성립합니다.
let peter = {
    name: "Peter Parker",
    // sayName: sayName,
    sayName,
};

let bruce = {
    name: "Bruce Wayne",
    // sayName: sayName,
    sayName,
};

sayName();
peter.sayName();
bruce.sayName();

/* this 사용 예시 */

let 호텔 = [
    {
        이름: "하나호텔",
        위치: "제주도 제주시 001",
        가격: { A: 50000, B: 30000, C: 15000 },
        방의개수: 50,
        예약자수: 25,
        남은방의개수: function () {
            return this.방의개수 - this.예약자수;
        },
    },
    {
        이름: "둘호텔",
        위치: "제주도 제주시 002",
        가격: { A: 100000, B: 60000, C: 30000 },
        방의개수: 100,
        예약자수: 30,
        남은방의개수: function () {
            return this.방의개수 - this.예약자수;
        },
    },
    {
        이름: "셋호텔",
        위치: "제주도 제주시 003",
        가격: { A: 80000, B: 50000, C: 30000 },
        방의개수: 120,
        예약자수: 80,
        남은방의개수: function () {
            return this.방의개수 - this.예약자수;
        },
    },
];
console.log(호텔[0].남은방의개수());
console.log(호텔[1].남은방의개수());
console.log(호텔[2].남은방의개수());

// this 값을 사용자의 의도대로 조작하기

// call()

// var peter = {
//     name : 'Peter Parker',
//     sayName : function(){
//           console.log(this.name);
//       }
//   }

//   var bruce = {
//     name : 'Bruce Wayne',
//   }
peter.sayName.call(bruce);

// apply();
/*
var peter = {
    name: "Peter Parker",
    sayName: function (is, is2) {
        console.log(this.name + " is " + is + " or " + is2);
    },
};

var bruce = {
    name: "Bruce Wayne",
};

peter.sayName.apply(bruce, ["batman", "richman"]);
*/

// bind()
/*
function sayName() {
    console.log(this.name);
}

var bruce = {
    name: "bruce",
    sayName: sayName,
};

var peter = {
    name: "peter",
    sayName: sayName.bind(bruce),
};

peter.sayName();
bruce.sayName();
*/

/*
### 정리

1. 메서드로 호출한 경우 this는 멤버접근연산자 앞의 객체를 가르킵니다.
2. 함수로 호출할 경우 this는 window(node는 global)를 가르킵니다.
3. 화살표 함수의 경우 this는 상위스코프를 가르킵니다.
4. 생성자 함수 혹은 class의 경우 this는 인스턴스를 가르킵니다.
*/
