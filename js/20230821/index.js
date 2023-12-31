// 책 목록
const btnList = document.querySelector(".btn-open-list");
const library = document.querySelector(".library");

btnList.addEventListener("click", function () {
    library.classList.toggle("open");
    if (library.classList.contains("open")) {
        btnList.textContent = "책 목록 닫기";
    } else {
        btnList.textContent = "책 목록 열기";
    }
});

// 책 선택하기
const books = document.querySelectorAll(".books");
const bookName = document.querySelector(".book-name");
books.forEach((book) => {
    book.addEventListener("click", (e) => {
        bookName.textContent = book.textContent;
        library.classList.remove("open");
    });
});

// 책 추가, 삭제
const bookAdd = document.querySelector(".btn-add");
const bookDel = document.querySelector(".btn-del");

bookAdd.addEventListener("click", function () {
    const newLi = document.createElement("li");
    const newBook = document.createElement("button");
    const newBookTit = prompt("책 제목을 입력해주세요.");
    newBook.append(newBookTit);
    newBook.classList.add("books");
    newLi.append(newBook);
    library.append(newLi);
});
/*
bookDel 구현하는 방법 구상 필요
*/
