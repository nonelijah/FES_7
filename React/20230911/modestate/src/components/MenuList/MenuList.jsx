import React from "react";
import MenuListItem from "../MenuListItem/MenuListItem";
import "./MenuList.css";

export default function menuList({ setCurrentMood }) {
    const menus = [
        "좋아요! 😃",
        "정말 좋아요! 🤭",
        "최고에요! 😄",
        "미쳤어요!! 🤪",
    ];
    return (
        <ul className="containerList">
            {menus.map((moodEl) => {
                return (
                    <MenuListItem
                        mood={moodEl}
                        key={moodEl}
                        setCurrentMood={setCurrentMood}
                    />
                );
            })}
        </ul>
    );
}
