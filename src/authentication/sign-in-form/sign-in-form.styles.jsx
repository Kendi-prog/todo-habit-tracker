import styled from "styled-components";


export const SignInFormContainer = styled.div`
    width: 400px;
    margin: auto;
    padding: 20px;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

export const InputContainer = styled.div`
    position: relative;
    margin-bottom: 20px;

    & input {
        width: 100%;
        padding: 12px 40px 12px 12px;
        border: 1px solid #ccc;
        border-radius: 5px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        transition: border-color 0.3s, box-shadow 0.3s;

        &:focus {
            border-color: #007bff;
            box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
            outline: none;
        }

        &:placeholder-shown + label {
            top: 12px;
            left: 12px;
            font-size: 14px;
            color: #aaa;
        }
    }

    & label {
        position: absolute;
        top: 12px;
        left: 12px;
        transition: 0.2s;
        color: #aaa;
        pointer-events: none;
    }

    & svg {
        position: absolute;
        top: 12px;
        left: 10px;
        color: #aaa;
    }
`;

export const Button = styled.button`
    width: 100%;
    padding: 12px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #0056b3;
    }

    &:disabled {
        background-color: #ccc;
    }
`;

export const ErrorMessageStyled = styled.div`
    color: red;
    font-size: 12px;
`;