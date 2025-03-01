import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #f7f7f7;
  overflow: hidden;
`;

export const Wrapper = styled.div`
  display: flex;
  width: 800px;
  height: 500px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  position: relative;
  background: black;
  // transition: transform 0.6s ease-in-out, opacity 0.6s ease-in-out;
`;

export const ImageContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  //transition: transform 0.8s ease-in-out, opacity 0.5s ease-in-out;
;`

export const FormContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  //transition: transform 0.8s ease-in-out, opacity 0.5s ease-in-out;
;`

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
