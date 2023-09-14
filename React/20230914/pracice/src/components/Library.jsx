import React from "react";
import { Outlet, Link } from "react-router-dom";
import styled from "styled-components";

const BooksUl = styled.ul`
    list-style: none;
    display: flex;
    justify-content: space-evenly;
`;

export default function Library() {
    return (
        <>
            <h1>출간작</h1>
            <BooksUl>
                <li>
                    <Link to="iceforest"> 얼음나무 숲</Link>
                </li>
                <li>
                    <Link to="sandblood"> 얼음나무 숲</Link>
                </li>
                <li>
                    <Link to="strangemansion"> 보이드 씨의 기묘한 저택</Link>
                </li>
                <li>
                    <Link to="rustymoon"> 녹슨달</Link>
                </li>
            </BooksUl>
            <Outlet />
        </>
    );
}

export function IceForest() {
    return (
        <>
            <h2>얼음나무 숲</h2>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis
                nesciunt dolor non vero consequuntur nam quis inventore
                dignissimos ipsum saepe placeat facere odit, quidem architecto
                quo pariatur, minus cum rem.
            </p>
        </>
    );
}
export function SandBlood() {
    return (
        <>
            <h2>모래선혈</h2>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis
                nesciunt dolor non vero consequuntur nam quis inventore
                dignissimos ipsum saepe placeat facere odit, quidem architecto
                quo pariatur, minus cum rem.
            </p>
        </>
    );
}
export function StrangeMansion() {
    return (
        <>
            <h2>보이드 씨의 기묘한 저택</h2>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis
                nesciunt dolor non vero consequuntur nam quis inventore
                dignissimos ipsum saepe placeat facere odit, quidem architecto
                quo pariatur, minus cum rem.
            </p>
        </>
    );
}
export function RustyMoon() {
    return (
        <>
            <h2>녹슨달</h2>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis
                nesciunt dolor non vero consequuntur nam quis inventore
                dignissimos ipsum saepe placeat facere odit, quidem architecto
                quo pariatur, minus cum rem.
            </p>
        </>
    );
}
