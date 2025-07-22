import { Navbar, Nav, Container, Form, FormControl, Button } from 'react-bootstrap';
import { FaShoppingCart, FaUser, FaSearch } from 'react-icons/fa';
import {LinkContainer} from 'react-router-bootstrap';
import logo from '../assets/logo/logo.png'
import '../assets/styles/Header.css'


const Header = () => {
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
                    </Nav.Link>
                  </LinkContainer>
                  
                  <LinkContainer to='/login'>
                    <Nav.Link> <FaUser /> Sign In</Nav.Link>
                    </LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
