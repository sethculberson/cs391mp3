import { StyledNav, StyledUl, StyledLi, StyledLink } from "./styled_elements/StyledComponents"

export default function Nav() {

    return (
        <StyledNav>
            <StyledUl>
                <StyledLi><StyledLink to={`/`}>Home</StyledLink></StyledLi>
                <StyledLi><StyledLink to={`/education`}>Education</StyledLink></StyledLi>
                <StyledLi><StyledLink to={`/projects`}>Projects</StyledLink></StyledLi>
                <StyledLi><StyledLink to={`/skills`}>Skills</StyledLink></StyledLi>
                <StyledLi><StyledLink to={`/work-experience`}>Work</StyledLink></StyledLi>
                <StyledLi><StyledLink to={`/leadership`}>Leadership</StyledLink></StyledLi>
            </StyledUl>
        </StyledNav>
    )
}