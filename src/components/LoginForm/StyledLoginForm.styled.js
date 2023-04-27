import styled from "styled-components";

const StyledForm = styled.form`

    grid-row: 2/3;
    grid-column: 1/2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: white;
    font-family: 'Odasans extended', sans-serif;
    margin: 0 auto;
    width: 60%;
    *{
    }
    .form__title{
        font-size: 2em;
        margin-bottom: 35px;
        white-space: wrap;
    }
    .form__button {
        margin-bottom: 15px; 
        padding: 5px;
        border-radius: 0.3em;
        background-color: rgb(255,110,0);
        color: black; 
        border: none;
        box-shadow: none;
        box-sizing: border-box;
        cursor: pointer;
        position: relative;
        font-weight: bold;
        font-size: 1.5em;
        transition: 0.5s;
    }
 
    .form__button:active {
    outline: 0;
    }

    .form__button:focus {
    outline: 0;
}

    .form__button:hover {
        background-color: white;
    }

    @media screen and (max-width: 488px) {

    }
`

export default StyledForm