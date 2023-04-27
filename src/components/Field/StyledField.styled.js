import styled from "styled-components";

const StyledField = styled.div`
        display: flex;
        flex-direction: column;

        margin-bottom: 25px;

    .form__input {
        margin-top: 10px;
        background: none;
        padding: 10px 8px;
        border-radius: 0.3em;
        border: 1px solid #ADB5BD;
        color: white;
        
    }
    .form__input:focus,
    .form__input:active{
        outline: none;
    }

    .form__label {
        text-transform: capitalize;
        font-weight: 500;

    }

`

export default StyledField