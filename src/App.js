import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import ToDo from "./ToDo App/components/todo.main/todo.main.component";
import SignInForm from "./authentication/sign-in-form/sign-in-form.component";
import SignUpForm from "./authentication/sign-up-form/sign-up-form.component";
import AuthForm from "./authentication/auth-form/auth-form.component";
import AuthForm2 from "./authentication/auth-form2/auth-form2.component";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to = "/authform"/>} />
        <Route path="/authform" element={<AuthForm />}/>
        <Route path="/signup" element={<SignUpForm />}/>
        <Route path="/signin" element={<SignInForm />}/>
        <Route path="/todo" element={<ToDo />}/>
      </Routes>
    </Router>
  );
}

export default App;
