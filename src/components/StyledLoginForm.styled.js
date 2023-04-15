import styled from "styled-components";

const StyledForm = styled.form`

    --color-alfa: #f0f2f4;
    --color-beta: #282c34;
    --color-gamma: #b7c1cb;
    --color-delta: #d80000;
    display: flex;
    flex-direction: column;
    background-color: var(--color-beta);
    padding: 2em;
    color: white;
    margin: 0 auto;
    width: 50%;
    text-transform: capitalize;
    font-family: Verdana, Geneva, Tahoma, sans-serif;

    .form__input {
        margin-bottom: 1em;
        border: none;
        padding: 1em 0.7em;
        background-color: var(--color-beta);
        color: #f0f2f4;
        border-bottom: 0.5px solid var(--color-alfa);
        width: 60%;
        align-self: center;
    }
    .form__input:hover{
        border-bottom: 1px solid var(--color-gamma);
    }
    .form__button {
    align-items: center;
    margin-top: 1em;
    width: 40%;
    align-self: center;
    appearance: none;
    background-color: var(--color-beta);
    border: 1px solid var(--color-gamma);
    border-radius: .375em;
    box-shadow: none;
    box-sizing: border-box;
    color: var(--color-gamma);
    cursor: pointer;
    display: inline-flex;
    font-family: BlinkMacSystemFont,-apple-system,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Fira Sans","Droid Sans","Helvetica Neue",Helvetica,Arial,sans-serif;
    font-size: 1rem;
    height: 2.5em;
    justify-content: center;
    line-height: 1.5;
    padding: calc(.5em - 1px) 1em;
    position: relative;
    text-align: center;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    vertical-align: top;
    white-space: nowrap; 
    }
 
    .form__button:active {
    outline: 0;
    }

    .form__button:focus {
    outline: 0;
    }

    .form__button:hover {
    color: var(--color-alfa);
    }

    .form__error{
        position: absolute;
        left: 20%;
        right: 0;
        top: 0;
        text-transform: lowercase;
        text-align: left;
        font-size: small;
    }
`

export default StyledForm