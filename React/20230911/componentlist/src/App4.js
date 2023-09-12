import React, { useState } from "react";
import Login from "./Login/Login";
import HomePage from "./Login/HomePage";
import Modal from "./Components/Modal";

export default function App4() {
    const user = {
        idUser: "jaehyun@weniv.com",
        pwUser: 1234,
    };

    // 로그인 상태를 판단하는 state
    const [login, setLogin] = useState(false);
    const [modalShow, setModalShow] = useState(true);

    return (
        <>
            {login ? (
                <HomePage setLogin={setLogin} />
            ) : (
                <Login infoUser={user} setLogin={setLogin} />
            )}
            {modalShow && <Modal setModalShow={setModalShow} />}
        </>
    );
}
