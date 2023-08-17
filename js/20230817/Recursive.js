// 재귀 함수를 사용하여 숫자를 원소로하는 배열의 모든 요소를 합하는 함수를 만들어 보세요!

function addElements(arr) {
    if (arr.length === 0) {
        return 0;
    }
    return arr[0] + addElements(arr.slice(1));
}

addElements([1, 2, 3, 4]);
