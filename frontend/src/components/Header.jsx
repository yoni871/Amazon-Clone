import { useNavigate } from 'react-router-dom';
import { Badge, Navbar, Nav, Container, Form, FormControl, Button, NavDropdown } from 'react-bootstrap';
import { FaShoppingCart, FaUser, FaSearch } from 'react-icons/fa';
import {LinkContainer} from 'react-router-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useLogoutMutation } from '../slices/usersApiSlice';
import { logout } from '../slices/authSlice';
import logo from '../assets/logo/logo.png'
import '../assets/styles/Header.css'


const Header = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const { userInfo } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async() => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate('/login');
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='md' collapseOnSelect>
        <Container fluid>
          <LinkContainer to='/'>
            <Navbar.Brand className='amazon-navbar-brand'>
               <img src={logo} alt='Amazon' className='amazon-logo'/> 
            </Navbar.Brand>
          </LinkContainer>

            <Form className='d-flex flex-grow-1 mx-3 search-form'>
                <div className='search-container'>
                    <FormControl 
                        bg='white'
                        type='search' 
                        placeholder='Search Amazon' 
                        className='search-input'
                        aria-label='Search' 
                    />
                    <Button variant='warning' className='search-icon'>
                        <FaSearch />
                    </Button>
                </div>
            </Form>
            
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='ms-auto'>
                  <LinkContainer to='/cart'>
                    <Nav.Link>
                      <FaShoppingCart />
                        {
                          cartItems.length > 0 && (
                            <Badge pill bg='success' style={{marginLeft: '5px'}}>
                              {cartItems.reduce((a, c) => a + c.qty, 0)}
                            </Badge>
                          )
                        }
                    </Nav.Link>
                  </LinkContainer>
                  { userInfo ? (
                    <NavDropdown title={userInfo.name} id='username'>
                      <LinkContainer to='/profile'>
                        <NavDropdown.Item>Profile</NavDropdown.Item>
                      </LinkContainer>
                      <NavDropdown.Item onClick={logoutHandler}>
                        Logout
                      </NavDropdown.Item>
                    </NavDropdown>
                  ) : (
                    <LinkContainer to='/login'>
                    <Nav.Link href='/login'> <FaUser /> Sign In</Nav.Link>
                    </LinkContainer>
                  ) }
                  
                </Nav>
            </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
