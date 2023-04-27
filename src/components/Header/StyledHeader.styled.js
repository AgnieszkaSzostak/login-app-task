import styled from "styled-components";

const StyledHeader = styled.header`
    position: absolute;
    width: 100%;
    grid-column: 1/4;
    grid-row: 1/2;
    z-index: 1;
    background-color: rgba(0, 0, 0,0.5);
    .navbar{
        margin: 0 2em;
        display: flex;
        justify-content: space-between;
        margin: 0 20px;
        align-items: center;
        font-weight: 700;
        padding: 0 60px;
    }

    .icon{
        margin-right: 5px;
    }



`

export default StyledHeader;