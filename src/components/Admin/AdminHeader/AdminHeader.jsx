import React, { useEffect }  from "react";
import Container from "react-bootstrap/Container";
import { toast, ToastContainer } from 'react-toastify'
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import NavDropdown from "react-bootstrap/NavDropdown";
import {useNavigate} from "react-router-dom"
import {useCookies } from 'react-cookie'
import axios from '../../../axios'

function AdminHeader() {
    const navigate = useNavigate();
    const [cookies,removeCookie] = useCookies([]);

    useEffect(() => {
      const verifyUser = async () => {
        if (!cookies.adminToken) {
          navigate("/admin/login");
        } else {
          const { data } = await axios.get("/api/admin/", {
            withCredentials: true,
          });
          console.log(data);
          if (!data.status) {
            removeCookie("adminToken");
            navigate("/admin/login");
          } else {
            toast(`Hi ${data.user} 🦄`, {
              theme: "dark",
            });
          }
        }
      };
  
      verifyUser();
    }, [cookies, navigate, removeCookie]);
    
    const logOut = ()=>{
        removeCookie("adminToken")
        navigate("/admin/login")
    }
 
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container >
          <Navbar.Brand href="/admin">Incubation</Navbar.Brand>
          <Navbar.Brand href="/admin">Applicatiions</Navbar.Brand>
          <Navbar.Brand href="/admin/bookSlot">Slot Booking</Navbar.Brand>
          <Navbar.Brand href="/admin/UserManage">User Manage</Navbar.Brand>
          <Nav>
            <NavDropdown title="Admin">
              <NavDropdown.Item onClick={logOut}>Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
      <ToastContainer/>
    </>
  );
}
export default AdminHeader;