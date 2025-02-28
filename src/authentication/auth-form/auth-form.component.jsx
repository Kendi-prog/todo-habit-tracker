import React, { useState } from "react";

import SignInForm from "../sign-in-form/sign-in-form.component";
import SignUpForm from "../sign-up-form/sign-up-form.component";
// import auth1 from "../auth-assets/auth1.jpeg";
// import auth2 from "../auth-assets/auth2.jpeg";
import { Container, ImageContainer, FormContainer, ToggleText } from "./auth-form.styles";

const AuthForm = () => {
    const [shifted, setShifted] = useState(false);

    const toggleForm = () => {
        setShifted(!shifted);
    }

    return (
        <Container shifted={shifted}>
            <ImageContainer shifted={shifted}/>
            <FormContainer>
                {shifted ? <SignInForm /> : <SignUpForm />}
                <ToggleText onClick={toggleForm}>
                    {shifted ? "Dont have an account? Sign up" : "Already have an account? Sign In"}
                </ToggleText>
            </FormContainer>
            

        </Container>
    );
}

export default AuthForm;

