import React, { useState } from "react";

export default function PetList() {
    const [pets, setPets] = useState([
        { name: "벨라", species: "고양이", age: "5", id: 111 },
        { name: "루시", species: "강아지", age: "3", id: 112 },
        { name: "데이지", species: "토끼", age: "2", id: 113 },
        { name: "몰리", species: "고양이", age: "1", id: 114 },
        { name: "매기", species: "강아지", age: "6", id: 115 },
    ]);

    function Form() {
        return (
            <form>
                <input type="text" placeholder="이름" id="nameVal" />
                <input type="text" placeholder="species" id="speciesVal" />
                <input type="text" placeholder="나이" id="ageVal" />
                <button onClick={() => {}}>추가하기</button>
            </form>
        );
    }

    return (
        <div>
            <Form />
            <ul>
                {pets.map((item) => {
                    return (
                        <li key={item.id}>
                            {item.name}은 {item.species}입니다. 그리고{" "}
                            {item.age}살 입니다.
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
