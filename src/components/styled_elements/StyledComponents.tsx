import styled from "styled-components";
import { Link } from 'react-router-dom';

export const StyledHeader = styled.h1`
    font-size: calc(8px + 2vw);
    padding: calc(4px + 1vw);
    color: #a24212;
    background-color: #202020;

    @media (max-width: 750px) {
        text-align: center;
        max-width: 100vw;
        padding: (2px + 0.4vw);
    }
`;

export const StyledFlexBox = styled.div`
    display: flex;
    flex-direction: row;
    @media (max-width: 750px) {
        flex-direction: column;
    }
`;

export const StyledNav = styled.nav`
    background-color: #333333;
    max-width: 30vw;
    width: 30vw;
    padding-top: calc(25px + 1vw);
    padding-bottom: calc(25px + 1vw);
    text-align: center;
    height: 100vh;
    max-heigh: 100vh;
    @media (max-width: 750px) {
        padding: calc(10px + 0.5vw) calc(2px + 0.2vw);
        height: auto;
        max-height: auto;
        width: 100vw;
        max-width: 100vw;
        padding: (2px + 0.4vw);
    }
`;

export const StyledUl = styled.ul`
    padding: 0px;
    list-style: none;
`;

export const StyledLi = styled.li`
    list-style: none;
    margin-top: calc(25px + 1vw);
    margin-bottom: calc(25px + 1vw);
    text-align: center;
    display: block;
    padding: calc(8px + 0.2%);
    max-width: 100%;

    @media (max-width: 750px) {
        display: inline;
        padding: calc(4px + 0.4vw);
        margin: calc(4px + 1vw);
        margin-right: calc(2px + 0.5vw);
        margin-left: calc(2px + 0.5vw);
        border-radius: 12px;
    }
`;

export const StyledMain = styled.main`
    text-align: center;
    padding: calc(15px + 1vw);
    max-width: 70vw;
    width: 70vw;
    max-height: 100vh;
    @media (max-width: 750px) {
        width: 100vw;
        max-width: 100vw;
        padding: (2px + 0.4vw);
        max-height: 100vh;
        height: 100vh;
    }
`;

export const StyledLink = styled(Link)`
    color: #D3D3D3;
    text-decoration: none;
    font-size: calc(8px + 1.2vw);
    font-weight: bold;
    padding: calc(1px + 0.3vw);
    border-bottom: 2px solid #D3D3D3;
`;

export const StyledTitle = styled.h2`
    text-align: center;
    font-size: calc(8px + 2vw);
    margin: calc(4px + 1vw);
    padding: calc(2px + 0.4vw);
`;

export const StyledP = styled.p`
    font-size: calc(6px + 1vw);
    padding: calc(6px + 0.5vw);

    @media (max-width: 750px) {
        font-size: calc(6px + 1.3vw);
    }
`;

export const StyledImg = styled.img`
    display: inline;
    max-height: 35vw;
    max-width: 50vh;
    border-radius: 30px;
    margin: calc(12px + 0.2vw);

    @media (max-width: 750px) {
        margin: calc(12px + 0.2vw) auto;
        text-align: center;
        display: block;
    }
`;

export const StyledCalcButton = styled.button`
    font-size: calc(10px + 1vw);
    margin: calc(4px + 0.5vw);
    padding: calc(10px + 0.5vw);
    border: 2px solid #a24212;
    border-radius: 4px;
`;

export const StyledCalcInput = styled.input`
    text-align: center;
    display: block;
    max-width: 40vw;
    max-height: 20vh;
    font-size: calc(10px + 1vw);
    margin: calc(4px + 0.5vw) auto;
    padding: calc(14px + 0.5vw);
    border: 2px solid #a24212;
    border-radius: 4px;
`;

export const StyledProjectLink = styled.a`
    font-size: calc(6px + 1vw);
    color: #1E90FF;
    text-decoration: none;
    border-bottom: 1px solid #1E90FF;

    @media (max-width: 750px) {
        font-size: calc(6px + 1.3vw);
    }
`;