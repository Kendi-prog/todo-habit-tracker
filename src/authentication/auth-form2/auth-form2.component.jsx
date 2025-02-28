import React, { useState } from "react";

import SignInForm from "../sign-in-form/sign-in-form.component";
import SignUpForm from "../sign-up-form/sign-up-form.component";
import { Container, Wrapper, ContentWrapper, ImageContainer, FormContainer, Image } from "./auth-form2.styles";
import auth1 from "../auth-assets/auth1.jpeg";
import auth2 from "../auth-assets/auth2.jpeg";
import auth3 from "../auth-assets/auth3.jpeg";




const AuthForm2 = () => {
    const [isSignUp, setIsSignUp] = useState(true);
  
    const toggleAuth = () => setIsSignUp(!isSignUp);
  
    return (
      <Container>
        <Wrapper>
            <ContentWrapper isSignUp={isSignUp}>
                <ImageContainer shift={!isSignUp}>
                        <Image 
                            src={isSignUp ? auth1 : auth2 } 
                            alt="sign in image"
                            key={isSignUp ? "signup" : "signin"} 
                        />

                </ImageContainer>
                <FormContainer shift={!isSignUp}>
                    {isSignUp ? <SignUpForm /> : <SignInForm />}
                    <p>
                        {isSignUp ? "Already have an account?" : "Don't have an account?"} 
                        <span style={{ cursor: "pointer", color: "blue" }} onClick={toggleAuth}>
                            {isSignUp ? "Sign In" : "Sign Up"}
                        </span>
                    </p>
                </FormContainer>
            </ContentWrapper>
        </Wrapper>
      </Container>
    );
  };
  
  export default AuthForm2;