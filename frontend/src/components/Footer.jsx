import { Container, Row, Col } from "react-bootstrap"

const Footer = () => {
    const currentYear = new Date().getFullYear()
  return (
    <footer className="footer-amazon">
        <Container fluid>
        <Row>
            {/* Get to Know Us Column */}
            <Col>
                <h5 className="footer-title">Get to Know Us</h5>
                <ul className="footer-list">
                    <li><a href="/careers">Careers</a></li>
                    <li><a href="/newsletter">Amazon Newsletter</a></li>
                    <li><a href="/about">About Amazon</a></li>
                    <li><a href="/accessibility">Accessibility</a></li>
                    <li><a href="/sustainability">Sustainability</a></li>
                    <li><a href="/press">Press Center</a></li>
                    <li><a href="/investors">Investor Relations</a></li>
                    <li><a href="/devices">Amazon Devices</a></li>
                    <li><a href="/science">Amazon Science</a></li>
                </ul>
            </Col>
            {/* Make Money with Us Column */}
            <Col>
                <h5 className="footer-title">Make Money with Us</h5>
                <ul className="footer-list">
                    <li><a href="/sell">Sell on Amazon</a></li>
                    <li><a href="/sell-apps">Sell apps on Amazon</a></li>
                    <li><a href="/supply">Supply to Amazon</a></li>
                    <li><a href="/brand">Protect & Build Your Brand</a></li>
                    <li><a href="/affiliate">Become an Affiliate</a></li>
                    <li><a href="/driver">Become a Delivery Driver</a></li>
                    <li><a href="/delivery-business">Start a Package Delivery Business</a></li>
                    <li><a href="/advertise">Advertise Your Products</a></li>
                    <li><a href="/publish">Self-Publish with Us</a></li>
                    <li><a href="/hub-partner">Become an Amazon Hub Partner</a></li>
                    <li><a href="/more-ways">›See More Ways to Make Money</a></li>
                 </ul>
            </Col>
            {/* Amazon Payment Products Column */}
            <Col>
                <h5 className="footer-title">Amazon Payment Products</h5>
                <ul className="footer-list">
                    <li><a href="/visa">Amazon Visa</a></li>
                    <li><a href="/store-card">Amazon Store Card</a></li>
                    <li><a href="/secured-card">Amazon Secured Card</a></li>
                    <li><a href="/business-card">Amazon Business Card</a></li>
                    <li><a href="/shop-points">Shop with Points</a></li>
                    <li><a href="/credit-marketplace">Credit Card Marketplace</a></li>
                    <li><a href="/reload">Reload Your Balance</a></li>
                    <li><a href="/gift-cards">Gift Cards</a></li>
                    <li><a href="/currency">Amazon Currency Converter</a></li>
                </ul>
            </Col>
            {/* Let Us Help You Column */}
            <Col>
                <h5 className="footer-title">Let Us Help You</h5>
                <ul className="footer-list">
                    <li><a href="/account">Your Account</a></li>
                    <li><a href="/orders">Your Orders</a></li>
                    <li><a href="/shipping">Shipping Rates & Policies</a></li>
                    <li><a href="/prime">Amazon Prime</a></li>
                    <li><a href="/returns">Returns & Replacements</a></li>
                    <li><a href="/devices">Manage Your Content and Devices</a></li>
                    <li><a href="/recalls">Recalls and Product Safety Alerts</a></li>
                    <li><a href="/registry">Registry & Gift List</a></li>
                    <li><a href="/help">Help</a></li>
                </ul>
            </Col>
        </Row>
        
            <Row>
                <Col className="text-center py-3">
                    <p>&copy; 1996-{currentYear}, Amazon.com, inc. or its affiliates</p>
                </Col>  
            </Row>
        </Container>
    </footer>
  )
}

export default Footer
