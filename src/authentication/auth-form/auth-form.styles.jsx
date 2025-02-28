import styled from "styled-components";
import auth1 from "../auth-assets/auth1.jpeg";
import auth2 from "../auth-assets/auth2.jpeg";
import auth3 from "../auth-assets/auth3.jpeg";


export const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    transition: transform 0.6s ease-in-out;
    transform: translateX(${props => (props.shifted ? '-50%' : '0')});
`;

export const ImageContainer = styled.div`
    flex: 1;
    background-image: url(${props => (props.shifted ? auth3 : auth1)});
    background-size: cover;
    background-position: center;
`;

export const FormContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    background-color: white;
`;

export const ToggleText = styled.p`
    margin-top: 20px;
    cursor: pointer;
    color: blue;
`;