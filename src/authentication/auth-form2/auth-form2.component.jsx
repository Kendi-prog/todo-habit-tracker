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
                {isSignUp ? (
                    <>
                        <ImageContainer>
                            <Image src={auth1} alt="Sign up image" key="signup"/>
                        </ImageContainer>
                        <FormContainer>
                            <SignUpForm />
                            <p>
                                "Already have an account?"
                                <span style={{ cursor: "pointer", color: "blue" }} onClick={toggleAuth}>
                                    "Sign In"
                                </span>
                            </p>
                        </FormContainer>   
                    </>
                ) : (
                    <>
                        <FormContainer>
                            <SignInForm />
                            <p>
                                "Don't have an account?"
                                <span style={{ cursor: "pointer", color: "blue" }} onClick={toggleAuth}>
                                    "Sign Up"
                                </span>
                            </p>
                        </FormContainer>
                        <ImageContainer>
                            <Image src={auth3} alt="Sign in image" key="signin"/>
                        </ImageContainer>
                    </>
                )}  
           
        </Wrapper>
      </Container>
    );
  };
  
  export default AuthForm2;