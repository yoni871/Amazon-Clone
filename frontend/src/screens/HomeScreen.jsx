import { useState, useEffect } from 'react';
import {Row, Col} from 'react-bootstrap';
import Product from '../components/Product';
import axios from 'axios'

const HomeScreen = () => {
    const[products, setProducts] = useState([]);
    const[loading, setLoading] = useState(true);
    const[error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async() => {
          try {
            const { data } = await axios.get('api/products');
            setProducts(data);
            setLoading(false);
          } catch(err) {
            setError(err.message);
            setLoading(false);
          }
        };
        fetchProducts();
    }, []);


    if(loading) return <h2>Loading products...</h2>
    if(error) return <h2>Erro: {error}</h2>
  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        { products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product}/>
            </Col>
        ))}
      </Row>
    </>
  )
}

export default HomeScreen
