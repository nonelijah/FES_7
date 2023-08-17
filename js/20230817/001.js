// 자바스크립트 Scope
{
    const func1 = function () {
        var a = 1;
        var b = 2;

        console.log(a + b);
    };

    var a = 20;

    func1();
}

// 함수의 호이스팅(Hoisting)
{
    console.log(x);
    console.log(y);
    console.log(z);
    var x = 1;
    let y = 2;
    const z = 3;

    sayHi(); // "Hello, lions!"
    function sayHi() {
        console.log("Hello, lions!");
    }
}

// 재귀함수
{
    function factorial(n) {
        if (n <= 1) {
            return n;
        }
        return n * factorial(n - 1);
    }

    // factorial(5) == 5 * factorial(4) == 5 * 24
    // factorial(4) == 4 * factorial(3) == 4 * 6
    // factorial(3) == 3 * factorial(2) == 3 * 2
    // factorial(2) == 2 * factorial(1) == 2 * 1
    // factorial(1) == 1

    function sigma(n) {
        if (n <= 1) {
            return n;
        }
        return n + sigma(n - 1);
    }

    // sigma(5) == 5 + sigma(4) == 5 + 10
    // sigma(4) == 4 + sigma(3) == 4 + 6
    // sigma(3) == 3 + sigma(2) == 3 + 3
    // sigma(2) == 2 + sigma(1) == 2 + 1
    // sigma(1) == 1

    function reverse(text) {
        if (text.length <= 1) {
            return text;
        }
        return reverse(text.slice(1)) + text[0];
    }

    // reverse('hello') == reverse('ello') + 'h' == 'olle' + 'h'
    // reverse('ello') == reverse('llo') + 'e' == 'oll' + 'e'
    // reverse('llo') == reverse('lo') + 'l' == 'ol' + 'l'
    // reverse('lo') == reverse('o') + 'l' == 'o' + 'l'
    // reverse('o') == 'o'
}

// 즉시 실행함수
{
    // 익명 즉시 실행 함수
    (function () {
        let a = 1;
        let b = 2;
        return a + b;
    })();

    // 기명 즉시 실행 함수
    (function foo() {
        let a = 3;
        let b = 5;
        return a * b;
    })();

    foo(); // ReferenceError: foo is not defined
}

// 클로저(Closure)
{
    function makeAdder(x) {
        var y = 1;
        return function (z) {
            y = 100;
            return x + y + z;
        };
    }

    var add5 = makeAdder(5);
    var add10 = makeAdder(10);
    //클로저에 x와 y의 환경이 저장됨

    console.log(add5(2)); // 107 (x:5 + y:100 + z:2)
    console.log(add10(2)); // 112 (x:10 + y:100 + z:2)
}

// 생성자 함수 (Constructor)
// 생성자 함수의 특징

// 일반 함수와 구분하기 위해 생성자 함수 이름 첫 글자는 대문자로 시작합니다.
// 반드시 `'new'` 연산자를 붙여 실행해야합니다. new 연산자는 생성자 함수의 this 가 인스턴스를 바라보도록 만들어주는 역할을 합니다.
{
    let book = {
        책이름: "알잘딱깔센 JavaScript 비동기 프로그래밍 - 비동기 너 내 동기가 돼라",
        책가격: 0,
        저자: ["구나영", "김경림"],
        출판일: "2022.08.12",
    };
    // 책이 100권이라면?

    function Book(책이름, 책가격, 저자, 출판일) {
        this.책이름 = 책이름;
        this.책가격 = 책가격;
        this.저자 = 저자;
        this.출판일 = 출판일;
    }

    let book1 = new Book("JS", 0, ["이호준"], "2099.10.30");
    let book2 = new Book("Python", 100000, ["이호준"], "2099.11.30");
    let book3 = new Book("React", 1000000, ["이호준"], "2099.12.30");

    console.log(book1, book2, book3);
}
