import React from "react";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { MdEmail, MdLock } from "react-icons/md";

import firebaseUtils from "../../utils/firebase";
import { 
    FloatingLabel,
     FormContainer,
     StyledField,
     SubmitButton,
     Title,
     HorizontalLineContainer,

} from "./sign-in-form.styles";


const SignInForm = () => {
    const navigate = useNavigate();

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

    const handleSubmit = async (values, { setSubmitting, setErrorMessage, resetForm }) => {
        try {
            await signInWithEmailAndPassword(auth, values.email, values.password);
            alert("Sign In Successful");
            navigate("/todo");
            resetForm();
        } catch (error) {
            setErrorMessage({ email: "Incorrect email or password"});
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
                        <FloatingLabel>
                            <StyledField type="email" name="email" placeholder="Email" />
                            <ErrorMessage name="email"/>
                            {/* <MdEmail /> */}
                        </FloatingLabel>
                        <FloatingLabel>
                            <StyledField type="password" name="password" placeholder="Password" />
                            <ErrorMessage name="password"/>
                            {/* <MdLock /> */}
                        </FloatingLabel>
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
                    Sign in with Google
                </SubmitButton>
            </div>
        </FormContainer>
    );
}

export default SignInForm;