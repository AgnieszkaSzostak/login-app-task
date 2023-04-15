import styled from "styled-components";

const StyledField = styled.div`
        display: flex;
        justify-content: space-around;
        position: relative;
        position: relative;

    &:focus-within .form__label{
        display: none
    }
    &:has(.form__error) .form__label {
        display: none;
    }
    &:has(.form__error) .form__input {
        border-bottom: 1px solid var(--color-delta)
    }
    .hide{
        .form__label{
            display: none
        }
    }
    /* form__input  */
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