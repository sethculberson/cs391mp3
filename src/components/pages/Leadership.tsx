import { StyledMain, StyledUl, StyledTitle, StyledImg, StyledP } from "../styled_elements/StyledComponents";
import philanthropy from '../../images/philanthropy.jpeg';

export default function Leadership(){
    return (
        <StyledMain>
            <title>Leadership | Seth Culberson</title>
            <StyledTitle>Leadership</StyledTitle>
            <StyledUl>
                <li>
                    <h3>Sigma Chi Fraternity</h3>
                    <StyledUl>
                        <li>
                            <StyledP>Director of Philanthropy - Current</StyledP>
                        </li>
                        <li>
                            <StyledP>Marketing Chairman</StyledP>
                        </li>
                    </StyledUl>
                    <StyledImg src={philanthropy} alt="philanthropy"/>
                </li>
                <li>
                    <h3>Kappa Theta Pi Professional Fraternity</h3>
                    <StyledUl>
                        <li>
                            <StyledP>Vice President of Membership - Current</StyledP>
                        </li>
                        <li>
                            <StyledP>Director of Digital Strategies</StyledP>
                        </li>
                    </StyledUl>
                </li>
            </StyledUl>
        </StyledMain>
    )
}