import {
    Container,
    Col,
    Row,
  } from 'react-bootstrap';
import Media from '../../components/Media';
import Photo from '../../Assets/Rubin.jpg';
import './Rubin.css';
export default function Rubin() {
    return (
        <div className='Rubin'>
        <Container fluid>
            <Row>
                <Col  className="header__content">
                    <Media/>
                        <h6>CREATE YOUR WEBSITE</h6>
                        <h1>Rubin Barclay</h1>
                        <p>I specialize in frontend development, with a lot of focus on e-commerce and military grade AI technology.</p>
                </Col>
                <Col className="card__content">
                    <img className="custom-img" src={Photo} alt=""/>
                </Col>
            </Row>
        </Container>
    </div>
    )
}
