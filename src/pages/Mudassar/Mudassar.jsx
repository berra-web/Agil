import {
    Container,
    Col,
    Row,
  } from 'react-bootstrap';
import Media from '../../components/Media';
import Photo from '../../Assets/Mudassar.jpg';
import './Mudassar.css';
export default function Mudassar() {
    return (
        <div className='Mudassar'>
        <Container fluid>
            <Row>
                <Col  className="header__content">
                    <Media/>
                        <h6>CREATE YOUR WEBSITE</h6>
                        <h1>I am Mudassar</h1>
                        <p>i,m Mudassar, professional web developer with long time experience in this field​</p>
                </Col>
                <Col className="card__content">
                    <img className="custom-img" src={Photo} alt=""/>
                </Col>
            </Row>
        </Container>
    </div>
    )
}
