// 배열에 6개 숫자, 1번 ~ 45번 중복 없이

function lottoGenerator() {
    const lottArr = [];
    while (lottArr.length < 6) {
        const num = parseInt(Math.random() * 45 + 1);
        if (!lottArr.includes(num)) {
            lottArr.push(num);
        }
    }
    return lottArr;
}
console.log(lottoGenerator());
