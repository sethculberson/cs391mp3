import {useState} from "react";
import { StyledMain, StyledUl, StyledTitle, StyledP, StyledCalcButton, StyledCalcInput, StyledProjectLink } from "../styled_elements/StyledComponents"

export default function Projects() {
    const [firstNumber, setFirstNumber] = useState<string>('');
    const [secondNumber, setSecondNumber] = useState<string>('');
    const [output, setOutput] = useState<string>("Seth's Calculator");
    
    function handleAddition() {
        if (firstNumber !== '' && secondNumber !== '') {
            setOutput(`${Number(firstNumber) + Number(secondNumber)}`);
        }
    }

    function handleSubtraction() {
        if (firstNumber !== '' && secondNumber !== '') {
            setOutput(`${Number(firstNumber) - Number(secondNumber)}`);
        }
    }
    
    function handleMultiplication() {
        if (firstNumber !== '' && secondNumber !== '') {
            setOutput(`${Number(firstNumber) * Number(secondNumber)}`);
        }
    }
    
    function handleDivision() {
        if (firstNumber !== '' && secondNumber !== '') {
            if (Number(secondNumber) !== 0) {
                setOutput(`${Number(firstNumber) / Number(secondNumber)}`);
            } else {
                setOutput("Error: Division by zero");
            }
        }
    }
    
    function handleExponentiation() {
        if (firstNumber !== '' && secondNumber !== '') {
            let result = 1;
            for (let i = 0; i < Number(secondNumber); i++){
                result *= Number(firstNumber);
            }
            setOutput(`${result}`);
        }
    }

    function handleClear() {
        setFirstNumber('');
        setSecondNumber('');
        setOutput("Seth's Calculator");
    }

    return (
        <StyledMain>
            <title>Projects | Seth Culberson</title>
            <StyledTitle>Projects</StyledTitle>
            <StyledUl>
                <li>
                    <StyledProjectLink href="https://hobeygrid.com">Hobey Grid</StyledProjectLink>
                    <StyledP>
                        A full stack NCAA hockey trivia game. 
                        Technologies used include React, C#, and Postgres.
                    </StyledP>
                </li>
                <li>
                    <StyledProjectLink href="https://github.com/sethculberson">Electricity Demand Model</StyledProjectLink>
                    <StyledP>
                        A machine learning model in python made with pandas, numpy, and scikit-learn. 
                        Achieved 93% accuracy in predicting New England Residential Energy Demand.
                    </StyledP>
                </li>
                <li>
                    <StyledP><strong>Calculator!</strong></StyledP>
                    <div>
                        <StyledCalcInput id="numOne" type="text" value={firstNumber} onChange={e => setFirstNumber(e.target.value)}/>
                        <StyledCalcInput id="numTwo" type="text" value={secondNumber} onChange={e => setSecondNumber(e.target.value)}/>
                    </div>
                    <div>
                        <StyledCalcButton onClick={handleAddition}>+</StyledCalcButton>
                        <StyledCalcButton onClick={handleSubtraction}>–</StyledCalcButton>
                        <StyledCalcButton onClick={handleMultiplication}>x</StyledCalcButton>
                        <StyledCalcButton onClick={handleDivision}>÷</StyledCalcButton>
                        <StyledCalcButton onClick={handleExponentiation}>**</StyledCalcButton>
                        <StyledCalcButton onClick={handleClear}>Clear</StyledCalcButton>
                    </div>
                    <h3>{output}</h3>
                </li>  
            </StyledUl>
        </StyledMain>        
    )
}