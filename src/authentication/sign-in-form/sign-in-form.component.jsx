import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { MdEmail, MdLock } from "react-icons/md";

import firebaseUtils from "../../utils/firebase";
import { 
    SignInFormContainer, 
    Button, 
    InputContainer,
    ErrorMessageStyled  
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
        <SignInFormContainer>
            <h2>Sign In</h2>
            <Formik 
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting}) => (
                    <Form>
                        <InputContainer>
                            <Field type="email" name="email" placeholder="Email" />
                            <label>Email</label>
                            <ErrorMessage name="email" component={ErrorMessageStyled}/>
                            <MdEmail />
                        </InputContainer>
                        <InputContainer>
                            <Field type="password" name="password" placeholder="Password" />
                            <label>Password</label>
                            <ErrorMessage name="password" component={ErrorMessageStyled}/>
                            <MdLock />
                        </InputContainer>
                        <Button type="submit" disabled={isSubmitting}>
                            {isSubmitting ? "Signing in ..." : "Sign In"}
                        </Button>
                    </Form>
                )}
            </Formik>
            <div>
                <p>Or sign in with:</p>
                <Button onClick={() => handleGoogleSignIn(googleSignIn)}>
                    Sign in with Google
                </Button>
            </div>
        </SignInFormContainer>
    );
}

export default SignInForm;