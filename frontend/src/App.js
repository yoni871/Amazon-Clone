import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Container className='py-3'>
          <Outlet />
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default App
