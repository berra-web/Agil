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
                        <h6>Agil Projektmetodik</h6>
                        <h1>Mudassar Khan</h1>
                        <p>Hello! Im Mudassar, a 24 year old developer in the making. Feel free to let me know if you got any projects that you need help working on! Or if you got a creative job offer!​</p>
                </Col>
                <Col className="card__content">
                    <img className="custom-img" src={Photo} alt=""/>
                </Col>
            </Row>
        </Container>
    </div>
    )
}
