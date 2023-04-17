import styled from "styled-components";

const StyledHeader = styled.header`
    --color-alfa: #f0f2f4;
    --color-beta: #282c34;
    --color-gamma: #b7c1cb;


    .navbar{
        background-color: var(--color-beta);
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        padding: 0 0.5em 1em;
        font-size: calc(10px + 2vmin);
        color: var(--color-alfa);
        align-self: center;
        font-weight: 700;
    }
    .navbar__user{
        color: var(--color-gamma);
    }
    .header__title{ 

    }
    span{
        color: var(--color-gamma)
    }

    @media screen and (max-width: 768px) {
        padding: 0 0.2em;
    }
    
`

export default StyledHeader;