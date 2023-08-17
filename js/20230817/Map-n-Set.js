// Map
{
    let m = new Map();

    // Map에 값을 넣기
    m.set("하나", "1");
    m.set(1, "하나");
    m.set(true, 1);
    m.set(false, 0);

    // Map의 값에 접근하기
    console.log(m.get("하나"));
    console.log(m.get(true));

    // Map의 값이 있는지 확인하기
    console.log(m.has("하나"));

    // Map의 값을 제거하기
    console.log(m.delete("하나"));
    console.log(m.has("하나"));
    console.log(m);

    // Map의 크기를 확인하기
    console.log(m.size);

    // Map의 모든 데이터를 삭제하기
    m.clear();

    const data = new Map()
        .set("name", "hojun")
        .set("age", 10)
        .set("height", 180);
}

// Map의 순환(일반적인 for문을 사용하려면 아래처럼 전개해야 합니다.)

// let m = [...data]
for (const variable of m) {
    console.log(`m을 순회하고 있습니다. ${variable[0]}`);
    console.log(`m을 순회하고 있습니다. ${variable[1]}`);
}

for (const [key, val] of m) {
    console.log(`${key}: ${val}`);
}

// Map의 값에 접근
console.log(m.keys());
console.log(m.values());

// 인덱스를 가지는 자료형을 맵핑하기
let temp = new Map([
    [1, 10],
    [2, 20],
    [3, 30],
    [4, 40],
]);

console.log(temp);

// object 자료형을 맵으로 변환하기
let temp2 = new Map(Object.entries({ one: 1, two: 2 }));
// 이 메서드는 객체의 키-값 쌍을 요소([key, value])로 가지는 배열을 반환합니다.
console.log(temp2);

// 반대의 경우
const temp3 = Object.fromEntries(temp2);
console.log(temp3);

// set
// 중복을 허용하지 않는 데이터
let s = new Set("abcdeeeeeeeee");
console.log(s);
console.log(s.size);

// Set에 값을 추가하기
s.add("f");
console.log(s);

// Set을 순환하기
for (let variable of s) {
    console.log(variable);
}

// 값이 배열인 경우
let ss = new Set("abcdeeeeeeeee".split(""));
console.log(ss);

// Set의 값을 제거하기
ss.delete("b");

// Set의 값을 확인하기
console.log(ss.has("a"));

// Set의 모든 값을 제거하기
ss.clear();
console.log(ss);

let a = new Set("abc");
let b = new Set("cde");
// 교집합
let cro = [...a].filter((value) => b.has(value));
// 합집합
let union = new Set([...a].concat(...b));
// 차집합
let dif = [...a].filter((x) => !b.has(x));
