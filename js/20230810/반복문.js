// while

let num = 0;

while (num < 11) {
    document.write(num, "<br>");
    num += 1;
}

// do while
let input;

do {
    input = prompt("숫자를 입력하세요.");
} while (isNaN(input));

console.log("입력한 숫자는 " + input + "입니다.");

// while break
// 예시 1
{
    let num = 0;
    while (num < 11) {
        num++;
        document.write(num, "<br>");
        if (num > 5) {
            break;
        }
    }
}

// 예시 2
{
    let i = 0;
    while (i < 100) {
        i++;
        if (i === 14) {
            console.log(i + "살 부터 중학생이 됩니다.");
            break;
        }
    }
    console.log("중학교 입학을 축하합니다");
}

// continue
for (let i = 0; i < 20; i++) {
    if (i < 13) continue;
    console.log(i + "살은 청소년입니다.");
}

// label
outer: for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        if (i + j === 3) {
            break outer;
        }
        console.log(i, j);
    }
}
