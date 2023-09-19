import React, { useState } from "react";
import "./Main.css";

export default function Main({ setModalShow }) {
    const [field, setField] = useState("");
    const [time, setTime] = useState(0);
    console.log(field, time);

    function fieldSet(e) {
        setField(e.target.value);
    }

    function timeSet(e) {
        setTime(e.target.value);
    }
    const [day, setDay] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        if (field === "") {
            alert("전공을 입력해주세요.");
        } else if (time == "") {
            alert("룬련할 시간을 입력해주세요.");
        } else {
            setDay(Math.ceil(10000 / parseInt(time)));
        }
    }

    return (
        <main>
            <form className="cont-input" onSubmit={handleSubmit}>
                <p className="txt-wannabe">
                    나는
                    <input
                        type="text"
                        onChange={fieldSet}
                        placeholder="예) 프로그래밍"
                    />
                    전문가가 될 것이다.
                </p>
                <p className="txt-time">
                    그래서 앞으로 매일 하루에
                    <input
                        type="number"
                        min={1}
                        step={1}
                        max={24}
                        placeholder="예) 5시간"
                        onChange={timeSet}
                    />
                    시간씩 훈련할 것이다.
                </p>
                <button className="btn-exc" type="submit">
                    나는 며칠 동안 훈련을 해야 1만 시간이 될까?
                </button>
            </form>

            {day && (
                <section className="cont-result">
                    <h2 className="a11y-hidden">결과 확인</h2>
                    <p className="txt-wannabe">
                        당신은 <strong>{field}</strong> 전문가가 되기 위해서
                        <br />
                        대략 <strong>{day}</strong>일 이상 훈련하셔야 합니다. :)
                    </p>
                    <button
                        onClick={() => setModalShow(true)}
                        type="button"
                        className="btn-go"
                    >
                        훈련하러 가기 Go!Go!
                    </button>
                    <button type="button" className="btn-share">
                        공유하기
                    </button>
                </section>
            )}
        </main>
    );
}
