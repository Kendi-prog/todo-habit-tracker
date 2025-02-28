import styled from "styled-components";
import auth3 from "../auth-assets/auth3.jpeg";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #f7f7f7;
  overflow: hidden;
`;

export const Wrapper = styled.div`
//   display: flex;
  width: 800px;
  height: 500px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  position: relative;
`;

export const ContentWrapper = styled.div`
  display: flex;
  width: 200%;
  height: 100%;
  transform: ${(props) => (props.isSignUp ? "translateX(0)" : "translateX(-50%)")};
  transition: transform 0.5s ease-in-out;
`;

export const FormContainer = styled.div`
//   flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: white;
  padding: 20px;
//   transform: ${(props) => (props.shift ? "translateX(-100%)" : "translateX(0)")};
//   transition: transform 0.5s ease-in-out;
`;


 export const ImageContainer = styled.div`
//flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f0f0f0;
//   transition: opacity 0.5s ease-in-out;
//   transform: ${(props) => (props.shift ? "translateX(-100%)" : "translateX(0)")};
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
//   transition: opacity 0.5s ease-in-out;
`;