// 랜덤 숫자
var num = Math.random() * 45 + 1;
var ball1 = parseInt(num);
document.write(ball1);

/*
var lotto = [1, 2, 3, 4, 5, 6];
lotto.push(7);
document.write(lotto[0]);
*/

/*
var lotto = [];
for (var i = 0; i < 6; i++) {
    lotto.push(parseINt(Math.random() * 45 + 1));
}
document.write(lotto);
 */

/*
let lotto = [];
for (var i = 0; i < 6; i++) {
    var num = parseINt(Math.random() * 45 + 1);
    if (lotto.indexOf(num) == -1) {
        lotto.push(num);
    }
}
document.write(lotto);
*/

/*
var lotto = [1,2,3,33,22,11];
lotto.sort((a,b)=>a-b);
document.write(lotto);
*/

var lotto = [];
while (lotto.length < 6) {
    var num = parseInt(Math.random() * 45 + 1);
    if (lotto.indexOf(num) == -1) {
        lotto.push(num);
    }
}
lotto.sort((a, b) => a - b);
document.write(lotto);
