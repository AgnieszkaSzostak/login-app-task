import styled from "styled-components";
import image from '../../assets/images/background.jpg'
const StyledPanel = styled.div`
    grid-row: 1/4;
    grid-column: 2/3;
    position: relative;
    display:flex;
    justify-content: center;
    align-items: center;
    color: white;
    .panel__content--overlay{        
        position: absolute;
        bottom: 0;
        width: 100%;
        background-image: url(${image});
        background-position: right;
        background-size: cover;
        background-repeat: no-repeat;
        height: 100vh;
        min-height: 100vh;
        height: calc(var(--vh,1vh) * 100);
        min-height: calc(var(--vh,1vh) * 100);
        text-align: center;
      }
      .panel__title,
      .panel__description{
        font-family: 'Odasans extended', sans-serif;
        line-height: 150%;
      }
      .panel__title{
        text-transform: uppercase;
        font-weight: bold;
        padding-top: 220px;
        font-size: 3em;
      }
      .panel__description{
        font-size: 1.25em;
        
        padding: 0 50px;
      }
`

export default StyledPanel