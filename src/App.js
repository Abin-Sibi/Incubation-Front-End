import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/User/Login/Login"
import Register from "./components/User/Signup/Register"
import Home from "./pages/Home"
import Form from "./pages/Form";
import AdminLogin from "./pages/AdminLogin";
import AdminLoginPage from "./components/Admin/Adminlogin/AdminLogin"
import UserManage from "./components/Admin/UserManage/UserManage"
import "react-toastify/dist/ReactToastify.css"
import "bootstrap/dist/css/bootstrap.min.css";
import BookSlot from "./components/Admin/Bookslot/BookSlots";
import './App.css'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/register" element={<Register />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/apply" element={<Form />} />
        <Route exact path="/admin/login" element={<AdminLoginPage />} />
        <Route exact path="/admin" element={<AdminLogin />} />
        <Route exact path="/admin/bookSlot" element={<BookSlot/>}/>
        <Route exact path="/admin/UserManage" element={<UserManage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
