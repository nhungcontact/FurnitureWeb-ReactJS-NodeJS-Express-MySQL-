import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import { getUserByEmail, isAuthenticate, logout } from '../../services/userService';
import { useEffect, useState } from 'react';
import { getCartByUserId } from '../../services/cartService';
// style={{position: "absolute"}}
const Header =()=> {
//     const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);
  const [token,setToken]=useState('');
  const [username,setUsername]=useState('');
  const [userId,setUserId]=useState('');

  const [qtyCart,setQtyCart] = useState(0);
  
  useEffect(()=>{
    getUser();
  },[]);

  const getUser = async()=>{
    let cookies = await isAuthenticate();
    setToken(cookies);
    let email = sessionStorage.getItem('email');
    if (email) {
        let user = await getUserByEmail(email);
        if (user && user.data.errCode === 0) {
            setUsername(user.data.user.username);
            setUserId(user.data.user.id)
        }
    }
  }
  useEffect(()=>{
    getCart()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[userId]);

  const getCart = async()=>{
    const cart = await getCartByUserId(userId);
    
    console.log(cart);
    if(cart && cart.data.errCode === 0){
      setQtyCart(cart.data.carts.length);
    }
  }
 const handleLogout = async () => {
    // event.preventDefault();
    await logout();
}
  return (
    <div className='header'>
        <div className='d-flex align-items-center justify-content-between px-4 py-2'>
            <div className='header-phone-contact'>
                <span>
                    <i className="fa-solid fa-phone-volume"></i> 
                    HotLine: <a href='tel: 19006777'>19006777</a>
                </span>
            </div>
            <div className='header-auth d-flex'>
              <span style={token ? { display: 'none' } : { display: 'block' }}>
              <Link to="register" className='sign-up'>Register</Link>
                <Link to="login" className='pe-3'>Login</Link>
              </span>
              <Dropdown style={token ? { display: 'block' } : { display: 'none' }}>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                    {username}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Link to="account" className="dropdown-item">Account</Link>
                        <Link to="account/address" className="dropdown-item">My address</Link>
                        <Dropdown.Item href="#/action-3" onClick={handleLogout}>Log out</Dropdown.Item>
                    </Dropdown.Menu>    
                </Dropdown>
                
                <Link to="cart" className='header-cart'>
                    <i className="fa-solid fa-basket-shopping"></i>
                    <span className='number'>{qtyCart}</span>
                </Link>
            </div>
        </div>
        <Navbar key="lg" expand="lg" className="header-nav">
          <Container>
            <Navbar.Brand href="#" className='logo'>HOME's</Navbar.Brand>
            <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" />
            <Navbar.Offcanvas
              id="offcanvasNavbar-expand-lg"
              aria-labelledby="offcanvasNavbarLabel-expand-lg"
              placement="start"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg" className='logo'>
                  HOME's
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                
                <Nav className="justify-content-center flex-grow-1 p-3">
                  <NavLink className={(navData) => navData.isActive ? "active" : "first after" } to="" end>HOME</NavLink>
                  <NavLink className={(navData) => navData.isActive ? "active" : "first after" } to="introduce">INTRODUCE</NavLink>
                  <NavLink className={(navData) => navData.isActive ? "active" : "first after" } to="product">PRODUCT</NavLink>
                  {/* <NavDropdown
                    title="SẢN PHẨM"
                    id="offcanvasNavbarDropdown-expand-lg"
                  >
                    <NavDropdown.Item className={(navData) => navData.isActive ? "active" : "first after" } href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item className={(navData) => navData.isActive ? "active" : "first after" } href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item className={(navData) => navData.isActive ? "active" : "first after" } href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown> */}
                  <NavLink className={(navData) => navData.isActive ? "active" : "first after" } to="blog">BLOGS</NavLink>
                  <NavLink className={(navData) => navData.isActive ? "active" : "first after" } to="contact">CONTACT</NavLink>
                </Nav>
                <div className='header-search'>
                    <Form className="d-flex form-search">
                        <Form.Control
                        type="search"
                        placeholder="Tìm kiếm"
                        className="me-2"
                        aria-label="Search"
                        />
                        <Button><i className="fa-solid fa-magnifying-glass"></i></Button>
                    </Form> 
                </div>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
    </div>
  );
}

export default Header;