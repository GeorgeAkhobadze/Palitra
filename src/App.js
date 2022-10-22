import logo from "./logo.svg";
import "./App.css";
import { Redirect, useLocation, useHistory } from "react-router";
import { Route, Routes, Navigate } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Main from "./components/main/Main";
import "./styles/styles.css";
import Header from "./components/header/Header";
import PostPage from "./components/main/PostPage/PostPage";
import AuthorPage from "./components/author/AuthorPage";
import SignUpPage from "./components/authorization/SignUpPage";
import LoginPage from "./components/authorization/LoginPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Navigate replace to="/posts" />} />
        <Route path="/posts/" element={<Main />} />
        <Route path="/posts/:id" element={<PostPage />} />
        <Route path="/author/:id" element={<AuthorPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
