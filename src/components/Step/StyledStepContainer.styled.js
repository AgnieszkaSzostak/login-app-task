import styled from "styled-components";

const StyledStepContainer = styled.div`
    align-self: center;
    margin-top: 1em;
    .step {
        height: 15px;
        width: 15px;
        margin: 0 4px;
        background-color: #bbbbbb;
        border: none;
        border-radius: 50%;
        display: inline-block;
        opacity: 0.4;
        &.active {
            opacity: 1;
        }
    }

`

export default StyledStepContainer