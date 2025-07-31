import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom"
import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import Rating from "../components/Rating";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { useGetProductDetailsQuery } from "../slices/productsApiSlice";
import { addToCart } from "../slices/cartSlice";

const ProductScreen = () => {
    const { id: productId } = useParams();

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const[qty, setQty] = useState(1);

    const { data: product, isLoading, error } = useGetProductDetailsQuery(productId);

    const addToCartHandler = () => {
        dispatch(addToCart({ ...product, qty }));
        navigate('/cart');
    }

    return (
        <>
            <Link className="btn btn-light my-3" to='/'>
                 Go Back
            </Link>
            { isLoading ? (
                <Loader />
            ) : error ? (
               <Message variant='danger'>{error?.data?.message || error.error }</Message>
            ) : (
            <>
            <Row>
                 <Col md={5}>
                     <Image src={product.images?.[0] || ''} alt={product.title} fluid />
                 </Col>
 
                 <Col md={4}>
                     <ListGroup variant="flush">
                         <ListGroup.Item>
                             <h3>{product.title}</h3>
                         </ListGroup.Item>
                         <ListGroup.Item>
                             <Rating 
                                 value={product.rating} 
                                 text={`${product.reviews?.length || 0} reviews`} 
                             />
                         </ListGroup.Item>
                         <ListGroup.Item>
                             {product.description}
                         </ListGroup.Item>
                         <ListGroup.Item>
                             Price: ${product.price}
                         </ListGroup.Item>
                     </ListGroup>
                 </Col>
 
                 <Col md={3}>
                     <Card>
                         <ListGroup variant="flush">
                             <ListGroup.Item>
                                 <Row>
                                     <Col>Price:</Col>
                                     <Col>
                                         <strong>${product.price}</strong>
                                     </Col>
                                 </Row>
                             </ListGroup.Item>
 
                             <ListGroup.Item>
                                 <Row>
                                     <Col>Status:</Col>
                                     <Col>
                                         <strong>{product.availabilityStatus || 'Unknown'}</strong>
                                     </Col>
                                 </Row>
                             </ListGroup.Item>
                             {product.availabilityStatus === "In Stock" && (
                                <ListGroup.Item>
                                    <Row>
                                        <Col>Qty</Col>
                                        <Col>
                                            <Form.Control
                                                as = 'select'
                                                value={qty}
                                                onChange={(e) => setQty(Number(e.target.value))}>
                                                    {[...Array(product.minimumOrderQuantity).keys()].map((x) => (
                                                        <option key={ x + 1 } value={ x + 1 }>
                                                            { x + 1}
                                                        </option>
                                                    ))}
                                                </Form.Control>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                             )}
                             <ListGroup.Item>
                                 <Button
                                     variant="warning"
                                     className=""
                                     type="button"
                                     disabled={product.availabilityStatus === "Out of Stock"}
                                     onClick={addToCartHandler}
                                 >
                                     Add to Cart
                                 </Button>
                             </ListGroup.Item>
                         </ListGroup>
                     </Card>
                 </Col>
             </Row>
                </>
            ) }
           
        </>
    );
};

export default ProductScreen;
