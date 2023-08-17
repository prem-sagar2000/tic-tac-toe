import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import UserNameInput from "./UserNameInput";
import App from './App'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

const root = createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<UserNameInput/>} />
        <Route path="/app" element={<App/>} />
      </Routes>
    </Router>
  </StrictMode>
);