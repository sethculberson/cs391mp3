import { StyledImg, StyledMain, StyledP, StyledTitle } from "../styled_elements/StyledComponents";
import camera from '../../images/camera.jpeg';

export default function Skills(){
    return (
        <StyledMain>
            <title>Skills | Seth Culberson</title>
            <StyledTitle>Skills</StyledTitle>
            <StyledP>
                I have completed courses in linear algebra, computer systems, probability, and statistics as a student at Boston University. 
                Independently, I learned Python, Java, and C#. In Python, I am experienced with the pandas, numpy, scikit-learn, matplotlib, and flask libraries. 
                In addition, I've used tools like Git, Docker, Azure, and Google Cloud to document and deploy my technical projects. Outside of computer science, I also have intermediate ability with the Adobe Creative Suite, and I have experience managing social media accounts for
                my clubs and organizations.
            </StyledP>
            <StyledImg src={camera} alt="taking pictures"/>
        </StyledMain>
    )
}