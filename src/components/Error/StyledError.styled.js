import styled from "styled-components";

const StyledError = styled.p`
        --color-delta: #d80000;
        color: var(--color-delta);
        text-align: left;
        font-size: small;
        width: 55%;
        white-space: nowrap;
        
        ::first-letter{
                text-transform: capitalize;
        }


`

export default StyledError;