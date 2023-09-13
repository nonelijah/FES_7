import React from "react";
import styled, { css } from "styled-components";

const Btn = styled.button`
    background-color: blue;
    color: white;
    width: 100px;
    height: 50px;
    margin: 10px;
    font-size: 20px;
`;

// css 컴포넌트
const radius = css`
    border-radius: 10px;
    border: 0;
    box-shadow: 0 0 10px #767676;
`;

// Btn 스타일드컴포넌트를 확장! styled(확장하고 싶은 컴포넌트)
const Btn2 = styled(Btn)`
    ${radius}
    color: black;
`;

const Btn3 = styled(Btn)`
    ${radius}
    background-color: #9acd32;
`;

// V2
// const BorderNone = css`
//     border: none;
// `;
// const BorderRadius = css`
//     border-radius: 8px;
// `;
// const BoxShadow = css`
//     box-shadow: 0 0 5px #33333333;
// `;

// const Btn = styled.button`
//     background-color: blue;
//     color: white;
// `;
// // Btn 스타일드컴포넌트를 확장! styled(확장하고싶은컴포넌트)
// const ExtendedBtn = styled(Btn)`
//     ${BorderNone}
//     ${BorderRadius}
//     ${BoxShadow}
//     color: ${(props) => props.color};
//     background-color: ${(props) => props.bgColor};
// `;

const App6 = () => {
    return (
        <>
            <Btn>버튼1</Btn>
            <Btn2>버튼2</Btn2>
            <Btn3>버튼3</Btn3>
            {/* <ExtendedBtn color="black" bgColor="blue">
                버튼2
            </ExtendedBtn>
            <ExtendedBtn color="white" bgColor="green">
                버튼3
            </ExtendedBtn> */}
        </>
    );
};

export default App6;
