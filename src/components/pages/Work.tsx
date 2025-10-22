import { StyledMain, StyledUl, StyledTitle, StyledImg, StyledP } from "../styled_elements/StyledComponents";
import chubbies from '../../images/chubbies.jpeg';
import laxpic from '../../images/laxpic.jpeg';

export default function Work(){
    return (
        <StyledMain>
            <title>Work | Seth Culberson</title>
            <StyledTitle>Work Experience</StyledTitle>
            <StyledP>
                I have work experience in a variety of fields, and
                most of my jobs have been in the summer. Currently, I 
                am a team managers for the Boston
                University Women's Lacrosse Team, where I video games
                and create short form content for team social media channels.
                Here are my past and present job titles and time worked:
            </StyledP>
            <StyledUl>
                <li>
                    <StyledP>Usher | The Cynthia Woods Mitchell Pavilion | March 2022 - August 2022</StyledP> 
                </li>
                <li>
                    <StyledP>Sales Associate | Chubbies Shorts | May 2024 - September 2024</StyledP>
                </li>
                <li>
                    <StyledP>Athletics Assistant | Boston University Women's Lacrosse | September 2024 - Present</StyledP>
                </li>
            </StyledUl>
            <StyledImg src={chubbies} alt="chubbies"/>
            <StyledImg src={laxpic} alt="lacrosse picture"/>
        </StyledMain>
    );
}