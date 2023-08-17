// 콜백함수
function sum(x, y, 콜백함수) {
    콜백함수(x + y);
    console.log(콜백함수);
    return x + y;
}

function documentWriter(s) {
    document.write("콜백함수", s);
}

sum(10, 20, documentWriter);

/*
sum(10, 20, documentWriter)
sum(10, 20, documentWriter('콜백함수', s))
{
    documentWriter(x + y);
    return x + y
}
{
    document.write('콜백함수', x + y)
    return x + y
}
*/

// 클로저를 이용하여 user의 아이디를 다른 공간에 넣을 수 있는 방법이 뭐가 있을까.
