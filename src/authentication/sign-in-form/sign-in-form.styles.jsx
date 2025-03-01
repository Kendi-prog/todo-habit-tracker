import styled from "styled-components";
import {Field} from "formik";

export const FormContainer = styled.div`
  background: #F7F3FA;
//   padding: 30px;
//   border-radius: 10px;
//   box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
// //   width: 450px;
// //   height: 250px;
//   text-align: center;
//   width: 100%;
//   height:100%;
`;

export const Title = styled.h3`
    text-align: center;
`;

export const TitleText = styled.p`
    text-align: center;
    margin-top: -20px;
    font-size: 10px;
`;

export const StyledField = styled(Field)`
  width: 95%;
  padding: 10px;
  margin-top: 10px;
  border: 2px solid #ddd;
  border-radius: 55px;
  outline: none;
  background: white;
  box-shadow: inset 2px 2px 5px rgba(0, 0, 0, 0.1);
  font-size: 16px;
  transition: 0.3s;

  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }
`;

export const FloatingLabel = styled.div`
  position: relative;
  width: 100%;
  //margin-top: 15px;

  label {
    position: absolute;
    left: 15px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 14px;
    color: #777;
    transition: all 0.3s;
    pointer-events: none;
  }

  input:focus + label,
  input:not(:placeholder-shown) + label {
    top: 5px;
    font-size: 12px;
    color: #007bff;
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 10px;
  margin-top: 20px;
  border: none;
  border-radius: 55px;
  background: #7600bc;
  color: white;
  font-size: 13px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: #7600bc;
  }
`;

export const HorizontalLineContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-top: 20px;

    & hr {
        // flex: 1;
        width: 100px;
        border: 0;
        border-top: 2px solid #ccc; /* Style the horizontal line */
    }

    & span {
        padding: 0 5px; /* Spacing around the text */
        color: #ccc; /* Text color */
        font-weight: bold; /* Font weight */
    }
`