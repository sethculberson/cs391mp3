import styled from "styled-components";

const StyledFooter = styled.footer`
    text-align: center;
    padding: calc(10px + 0.5vw);
    background-color: #202020;
    color: #a24212;
    font-size: calc(8px + 1vw);
`;

export default function Footer() {

    return (
        <StyledFooter>
            All Rights Reserved by Seth Culberson Credits ©
        </StyledFooter>
    )
}