import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { signInWithEmailAndPassword } from "firebase/auth";

import { auth } from "../../utils/firebase";


const SignInForm = () => {
    const initialValues = {
        email: "",
        password: ""
    };

    const validationSchema = Yup.object({
        email: Yup.string().email("Invalid email address").required("Required"),
        password: Yup.string().min(6, "Password must be at least 6 characters").required("Required")
    });

    const handleSubmit = async (values, { setSubmitting, setErrorMessage }) => {
        try {
            await signInWithEmailAndPassword(auth, values.email, values.password);
            alert("Sign In Successful");
        } catch (error) {
            setErrorMessage({ email: "Incorrect email or password"});
        }
        setSubmitting(false);
    }

    return (
        <div>
            <h2>Sign In</h2>
            <Formik 
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting}) => (
                    <Form>
                        <div>
                            <Field type="email" name="email" placeholder="Email" />
                            <ErrorMessage name="email" component="div" style={{ color: 'red'}} />
                        </div>
                        <div>
                            <Field type="password" name="password" placeholder="Password" />
                            <ErrorMessage name="password" component="div" style={{ color: 'red'}} />
                        </div>
                        <button type="submit" disabled={isSubmitting}>
                            {isSubmitting ? "Signing in ..." : "Sign In"}
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default SignInForm;