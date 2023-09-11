import React, { useState } from "react";

export default function Login({ infoUser, setLogin }) {
    const [id, setId] = useState("");
    const [pw, setPw] = useState("");

    const handleLoginInput = (event) => {
        console.log(event.target.value);
        setId(event.target.value);
    };

    const handlePasswordInput = (event) => {
        console.log(event.target.value);
        setPw(event.target.value);
    };

    const handleLoginSubmit = (event) => {
        event.preventDefault();
        if (id === "") {
            alert("아이디를 입력해주세요.");
        } else if (pw === "") {
            alert(`비밀번호를 입력해주세요.`);
        } else if (
            id === infoUser.idUser &&
            pw === infoUser.pwUser.toString()
        ) {
            setLogin(true);
        } else {
            alert(`아이디 혹은 비밀번호가 틀렸습니다.`);
        }
    };

    return (
        <form onSubmit={handleLoginSubmit}>
            <label>
                아이디
                <input type="text" onChange={handleLoginInput} />
            </label>
            <br />
            <label>
                비밀번호
                <input type="password" onChange={handlePasswordInput} />
            </label>
            <button type="submit">로그인</button>
        </form>
    );
}
