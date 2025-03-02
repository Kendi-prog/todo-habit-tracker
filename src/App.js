import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import ToDo from "./ToDo App/components/todo.main/todo.main.component";
import AuthForm from "./authentication/auth-form/auth-form.component";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to = "/authform"/>} />
        <Route path="/authform" element={<AuthForm />}/>
        <Route path="/todo" element={<ToDo />}/>
      </Routes>
    </Router>
  );
}

export default App;
