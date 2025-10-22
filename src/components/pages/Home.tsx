import { StyledTitle, StyledMain, StyledP, StyledImg } from "../styled_elements/StyledComponents"
import headshot from '../../images/headshot.jpeg';
import skiing from '../../images/skiing.jpeg';

export default function Home() {

    return (
        <StyledMain>
            <title>Home | Seth Culberson</title>
            <StyledTitle>Welcome to my resume website!</StyledTitle>
            <StyledP>
                My name is Seth Culberson, and I'm a junior at Boston University studying computer science and statistics. 
                I'm originally from The Woodlands, TX, which is about 45 minutes north of Houston. 
                In my free time, I enjoy playing and watching sports, practicing guitar, and hanging out with my friends.
            </StyledP>
            <StyledImg src={headshot} alt="my headshot"/>
            <StyledImg src={skiing} alt="me skiing"/>
        </StyledMain>
    )
}