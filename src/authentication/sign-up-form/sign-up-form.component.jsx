import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { createUserWithEmailAndPassword } from "firebase/auth"; 
import { doc, setDoc } from "firebase/firestore";

import { auth, db } from "../../utils/firebase";

const SignUpForm = () => {
    const initialValues = {
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    };

    const validationSchema = Yup.object({
        username: Yup.string()
            .min(3, "Username must be at least 3 characters")
            .max(15, "Username must be at most 15 characters")
            .required("Required"),
        email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
        password: Yup.string()
            .min(6, "Password must be at least 6 characters")
            .match(/[a-z]/, "Password must contain at least one lowercase letter")
            .match(/[A-Z]/, "Password must contain at least one uppercase letter")
            .match(/[0-9]/, "Password must contain at least one number")
            .match(/[^a-zA-Z0-9]/, "Password must contain at least one special character")
            .required("Required"),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref("password"), null], "Passwords must match")
            .required("Required")
    });

    const handleSubmit = async (values, { setSubmitting, setErrorMessage }) => {
        try {
            //creating the user in firebase authentication
            const userCredential = await createUserWithEmailAndPassword(auth, values.email, values.password);
            const user = userCredential.user;

            //creating the user in firestore
            await setDoc(doc(db, "users", user.uid), {
                username: values.username,
                email: values.email,
                createdAt: new Date()
            });

            alert("Account created successfully");
        } catch (error) {
            setErrorMessage({ email: "Email already in use"});
        }
        setSubmitting(false);
    };

    return (
        <div>
            <h2>Sign Up</h2>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <div>
                            <Field type="text" name="username" placeholder="Username" />
                            <ErrorMessage name="username" component="div" style={{ color: "red" }} />
                        </div>
                        <div>
                            <Field type="email" name="email" placeholder="Email" />
                            <ErrorMessage name="email" component="div" style={{ color: "red" }} />
                        </div>
                        <div>
                            <Field type="password" name="password" placeholder="Password" />
                            <ErrorMessage name="password" component="div" style={{ color: "red" }} />
                        </div>
                        <div>
                            <Field type="password" name="confirmPassword" placeholder="Confirm Password" />
                            <ErrorMessage name="confirmPassword" component="div" style={{ color: "red" }} />
                        </div>
                        <button type="submit" disabled={isSubmitting}>
                            {isSubmitting ? "Signing up ..." : "Sign Up"}
                        </button>
                    </Form>
                )}
            </Formik>

        </div>
    );
}

export default SignUpForm;