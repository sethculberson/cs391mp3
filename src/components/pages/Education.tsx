import { StyledMain, StyledTitle, StyledP, StyledImg, StyledProjectLink } from "../styled_elements/StyledComponents";
import gradparty from '../../images/gradparty.jpeg';
import meinboston from '../../images/meinboston.jpeg';
export default function Education() {
    return (
        <StyledMain>
            <title>Education | Seth Culberson</title>
            <StyledTitle>Education</StyledTitle>
            <StyledP>
                I am a junior at Boston University with a joint major in Statistics and Computer Science and a minor in Economics. 
                I am also taking masters classes in Earth and Environment. At BU, I'm a member of the <StyledProjectLink href="https://sigmachi.org">Sigma Chi</StyledProjectLink> Fraternity 
                and the <StyledProjectLink href="https://www.ktpbostonu.com">Kappa Theta Pi</StyledProjectLink> Professional Technology Fraternity.
            </StyledP>

            <StyledP>
                I attended The Woodlands Christian Academy in The Woodlands, Texas, for high school. I was part of the basketball, track, 
                and two time state champion cross country teams. During my senior year, I was awarded the National Merit Scholarship — a scholarship
                awarded to the top 1% of PSAT test takers — by College Board.
            </StyledP>
            <StyledImg src={gradparty} alt="my graduation party"/>
            <StyledImg src={meinboston} alt="me in Boston"/>
        </StyledMain>
    )
}