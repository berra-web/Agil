import {
    Container,
    Col,
    Row,
  } from 'react-bootstrap';
import Photo from '../../Assets/Jose.jpg';
import Media from '../../components/Media';
import './Jose.css';

export default function Jose() {
    return (
        <div className='Jose'>
        <Container fluid>
            <Row>
                <Col  className="header__content">
                    <Media/>
                        <h6>CREATE YOUR WEBSITE</h6>
                        <h1>I am Jose</h1>
                        <p>i,m Jose, professional web developer with long time experience in this field​</p>
                </Col>
                <Col className="card__content">
                    <img className="custom-img" src={Photo} alt=""/>
                </Col>
            </Row>
        </Container>
    </div>
    )
}
