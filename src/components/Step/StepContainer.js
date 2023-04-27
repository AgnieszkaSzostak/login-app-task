import React from "react"
import StyledStepContainer from "./StyledStepContainer.styled"

const StepContainer = (props) => {
    const {subpage, setSubpage} = props.subpage; 
    return (
        <StyledStepContainer>
            <span onClick={() => setSubpage(1)} className={subpage === 1 ? "step active" : "step"}></span>
            <span onClick={() => setSubpage(2)}className={subpage === 2 ? "step active" : "step"}></span>
        </StyledStepContainer>
    )
} 

export default StepContainer