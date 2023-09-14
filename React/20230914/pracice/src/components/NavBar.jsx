import { useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";
function NavBar() {
    const Nav = styled.header`
        margin-top: 25px;
        background-color: #ddd;
        border-bottom: 1px solid black;
        padding: 10px;
        border-radius: 20px;
    `;

    const NavUlCss = css`
        display: flex;
        justify-content: space-evenly;
        list-style: none;
    `;

    const NavUl = styled.ul`
        ${NavUlCss}
    `;

    const NavLi = styled.li`
        cursor: pointer;
    `;

    function Home() {
        const navigate = useNavigate();
        return <NavLi onClick={() => navigate("/")}>Home</NavLi>;
    }
    function Author() {
        const navigate = useNavigate();
        return <NavLi onClick={() => navigate("/author")}>하지은 작가</NavLi>;
    }
    function Library() {
        const navigate = useNavigate();
        return <NavLi onClick={() => navigate("/library")}>출간작</NavLi>;
    }

    return (
        <Nav>
            <NavUl>
                <Home />
                <Author />
                <Library />
            </NavUl>
        </Nav>
    );
}

export default NavBar;
