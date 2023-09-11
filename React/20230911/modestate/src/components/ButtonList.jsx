import Button from "./Button";
import "./style.css";

function ButtonList() {
    const menus = [
        "좋아요! 😃",
        "정말 좋아요! 🤭",
        "최고에요! 😄",
        "미쳤어요!! 🤪",
    ];

    return (
        <ul>
            <li>
                <Button menu={menus[0]} />
            </li>
            <li>
                <Button menu={menus[1]} />
            </li>
            <li>
                <Button menu={menus[2]} />
            </li>
            <li>
                <Button menu={menus[3]} />
            </li>
        </ul>
    );
}

export default ButtonList;
