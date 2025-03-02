import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

import firebaseUtils from "../../utils/firebase";
import { 
     FormContainer,
     StyledField,
     SubmitButton,
     Title,
     HorizontalLineContainer,
     GoogleIcon,
     RememberMe,
     RememberMeInput,
     ErrorMessageContainer,

} from "./sign-in-form.styles";


const SignInForm = () => {
    const navigate = useNavigate();
    const [rememberMe, setRememberMe] = useState(false);

    const initialValues = {
        email: "",
        password: ""
    };

    const validationSchema = Yup.object({
        email: Yup.string().email("Invalid email address").required("Required"),
        password: Yup.string().min(6, "Password must be at least 6 characters").required("Required")
    });

    const { auth, googleSignIn } = firebaseUtils;

    const handleGoogleSignIn = async (providerFunction) => {
        const user = await providerFunction();
        if(user) {
            alert("Sign In Successful");
            navigate("/todo");
        }
    }

    const handleSubmit = async (values, { setSubmitting, setErrorMessageContainer, resetForm }) => {
        try {
            const userCredential = await signInWithEmailAndPassword(
                auth, values.email, values.password
            );
            const accessToken = await userCredential.user.getIdToken();

            if(rememberMe) {
                Cookies.set("accessToken", accessToken, { expires: 30 });
            }

            alert("Sign In Successful");
            navigate("/todo");
            resetForm();
        } catch (error) {
            setErrorMessageContainer({ email: "Incorrect email or password"});
        }
        setSubmitting(false);
    }

    return (
        <FormContainer>
            <Title>Sign In</Title>
            <Formik 
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting}) => (
                    <Form>
                        <div>
                            <StyledField type="email" name="email" placeholder="Email" />
                            <ErrorMessageContainer name="email" component="div"/>
                        </div>
                        <div>
                            <StyledField type="password" name="password" placeholder="Password" />
                            <ErrorMessageContainer name="password" component="div"/>
                        </div>
                        <RememberMe>
                            <label>
                                <RememberMeInput 
                                    type="checkbox"
                                    checked={rememberMe}
                                    onChange={() => setRememberMe(!rememberMe)}
                                />
                                Remember me
                            </label>
                        </RememberMe>
                        <SubmitButton type="submit" disabled={isSubmitting}>
                            {isSubmitting ? "Signing in ..." : "Sign In"}
                        </SubmitButton>
                    </Form>
                )}
            </Formik>
            <div>
                <HorizontalLineContainer>
                    <hr />
                    <span>OR</span>
                    <hr />   
                </HorizontalLineContainer>
                <SubmitButton onClick={() => handleGoogleSignIn(googleSignIn)}>
                    <GoogleIcon />
                    Sign in with Google
                </SubmitButton>
            </div>
        </FormContainer>
    );
}

export default SignInForm;