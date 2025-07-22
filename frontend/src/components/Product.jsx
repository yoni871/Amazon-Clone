import { Card } from "react-bootstrap"
import { Link } from "react-router-dom"
import Rating from "./Rating"

const Product = ({ product}) => {
    product.totalRatings = product.reviews.length + Math.floor(Math.random() * 1000);
  return (
    <Card className="my-3 p-3 rounded">
        <Link to={`/product/${product.id}`}>
            <Card.Img 
                src={product.images[0]} 
                variant="top" 
            />
        </Link>

        <Card.Body>
            <Link to={`/product/${product._id}`} className="text-decoration-none">
                <Card.Title as="div" className="product-title">
                    <strong>{product.title}</strong>
                </Card.Title>
            </Link>
            <Card.Text as='div'>
                <Rating value={product.rating} text={`${product.totalRatings} ratings`} />
            </Card.Text>
            <Card.Text as="h3">
                ${product.price}
            </Card.Text>
        </Card.Body>
    </Card>
  )
}

export default Product
