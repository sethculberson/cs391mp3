import Header from "./Header"
import Nav from "./Nav"
import Footer from "./Footer"
import Home from "./pages/Home"
import Education from "./pages/Education"
import { Route, Routes } from "react-router"
import Work from "./pages/Work"
import Leadership from "./pages/Leadership"
import Projects from "./pages/Projects"
import Skills from "./pages/Skills"
import { StyledFlexBox } from "./styled_elements/StyledComponents"

export default function Root(){

    return(
        <>
            <Header/>
            <StyledFlexBox>
                <Nav/>
                <Routes>
                    <Route path={`/`} element={<Home/>}/>
                    <Route path={`/education`} element={<Education/>}/>
                    <Route path={`/work-experience`} element={<Work/>}/>
                    <Route path={`/leadership`} element={<Leadership/>}/>
                    <Route path={`/projects`} element={<Projects/>}/>
                    <Route path={`/skills`} element={<Skills/>}/>
                </Routes>
            </StyledFlexBox>
            <Footer/>
        </>
    )
}