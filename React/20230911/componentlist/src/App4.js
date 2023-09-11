import React, { useState } from "react";
import Login from "./Login/Login";
import HomePage from "./Login/HomePage";

export default function App4() {
    const user = {
        idUser: "jaehyun@weniv.com",
        pwUser: 1234,
    };

    // 로그인 상태를 판단하는 state
    const [login, setLogin] = useState(false);

    return (
        <div>
            {login ? (
                <HomePage />
            ) : (
                <Login setLogin={setLogin} infoUser={user} />
            )}
        </div>
    );
}
