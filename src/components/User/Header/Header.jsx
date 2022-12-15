import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import { ToastContainer, toast } from 'react-toastify'
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import NavDropdown from "react-bootstrap/NavDropdown";
import {useNavigate} from "react-router-dom"
import {useCookies} from 'react-cookie'
import axios from '../../../axios'

function Header() {
    const navigate = useNavigate();
    const [cookies,removeCookie] = useCookies([]);
    useEffect(()=>{
        const verifyUser = async ()=>{
            if(!cookies.jwt){
             navigate("/login")
            }else{
                const { data } = await axios.get("/",{withCredentials:true});
                if(!data.status){
                    removeCookie("jwt")
                    navigate("/login")
                }else toast(`HI ${data.user}`,{theme:"dark"})
            }
        }
        verifyUser();
    },[cookies,navigate,removeCookie])
    const logOut = ()=>{
        removeCookie("jwt")
        navigate("/register")
    }
 
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container >
          <Navbar.Brand href="/">Incubation</Navbar.Brand>
          <Nav>
            <NavDropdown title="User">
              <NavDropdown.Item onClick={logOut}>Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
      <ToastContainer/>
    </>
  );
}
export default Header;