import {
    Container,
    Col,
    Row,
  } from 'react-bootstrap';
import Photo from '../../Assets/Behrad.jpg';
import Media from '../../components/Media';
import './Behrad.css';

export default function Behrad() {
    return (
    <div className='homeContainer'>
        <Container fluid>
            <Row>
                <Col  className="header__content">
                    <Media/>
                        <h6>CREATE YOUR WEBSITE</h6>
                        <h1>I am Behrad</h1>
                        <p>i,m Behrad, professional web developer with long time experience in this field​</p>
                </Col>
                <Col className="card__content">
                    <img className="custom-img" src={Photo} alt=""/>
                </Col>
            </Row>
        </Container>
    </div>
    )
}
