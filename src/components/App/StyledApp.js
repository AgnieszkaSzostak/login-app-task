import styled from "styled-components";

const StyledApp = styled.div`
    position: relative;
    max-width: 100%;
    height: 100vh;
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: 60px 1fr 40px;
    row-gap: 40px;
    background-color: black;
    color: white;
`

export default StyledApp