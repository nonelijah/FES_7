import React, { useMemo, useRef, useState } from "react";

function App2() {
    const [name, setName] = useState("");
    const [id, setId] = useState("");
    const [userInfo, setUserInfo] = useState([]);

    const inputName = useRef(null);
    const inputId = useRef(null);

    function handleInputName(e) {
        setName(e.target.value);
        console.log("렌더링 - 1");
    }

    function handleInputId(e) {
        setId(e.target.value);
        console.log("렌더링 - 2");
    }

    function handleSubmit(e) {
        e.preventDefault();
        // 유저의 입력값을 초기화합니다.
        inputName.current.value = "";
        inputId.current.value = "";
        inputName.current.focus();

        // 유저의 입력값을 userInfo 변수에 저장합니다.
        const newInfo = [...userInfo, { name, id }];
        setUserInfo(newInfo);
        console.log("렌더링 - 3");
    }

    function getNum(list) {
        console.log("렌더링!");
        return list.length;
    }

    // userInfo 값이 업데이트 될 때만 getNum이 실행되도록 수정합니다.
    const itemLength = useMemo(() => {
        return getNum(userInfo);
    }, [userInfo]);

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="이름을 입력해주세요."
                    onChange={handleInputName}
                    ref={inputName}
                />
                <input
                    type="text"
                    placeholder="아이디를 입력해주세요."
                    onChange={handleInputId}
                    ref={inputId}
                />
                <button>회원명부 작성</button>
            </form>

            <ul>
                {userInfo.map((value, index) => {
                    return (
                        <li key={index}>
                            <h3>이름 : {value.name}</h3>
                            <strong>아이디 : {value.id}</strong>
                        </li>
                    );
                })}
            </ul>
            <span>현재 회원 수 : {itemLength}명</span>
        </>
    );
}

export default App2;
