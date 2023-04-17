import styled from "styled-components";

const StyledField = styled.div`
        display: flex;
        justify-content: space-around;
        position: relative;
        position: relative;

    &:focus-within .form__label,
    /* &:focus-within .form__error, */
    &:has(.form__error) .form__label,
    &.hide .form__label{
        display: none
    }

    &:has(.form__error) .form__input {
        border-bottom: 1px solid var(--color-delta)
    }

    &.hide .form__input{
        border-bottom: 1px solid var(--color-alfa)

    }
    /* form__input  */
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
    .form__input:focus,
    .form__input:active{
        border-bottom: 1px solid var(--color-alfa);
        outline: none;
    }

    /* form__label */
    .form__label {
        padding: 1em 0.7em;
        color: var(--color-gamma);
        text-align: left;
        position: absolute;
        font-size: small;
        left: 20%;
    }
`

export default StyledField