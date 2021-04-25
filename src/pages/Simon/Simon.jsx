import {
    Container,
    Col,
    Row,
  } from 'react-bootstrap';
import Media from '../../components/Media';
import Photo from '../../Assets/Simon.jpg';
import './Simon.css';
export default function Simon() {
    return (
        <div className='Simon'>
        <Container fluid>
            <Row>
                <Col  className="header__content">
                    <Media/>
                        <h6>CREATE YOUR WEBSITE</h6>
                        <h1>Hi, I'm Simon</h1>
                        <p>I'm a professional web developer with long time experience in this field​. 
                            If you need help with a website, then i'm more than happy to help you out. 
                            Come over for some coffee to our office and we will create some beutifull stuff! 
                        </p>
                </Col>
                <Col className="card__content">
                    <img className="custom-img" src={Photo} alt=""/>
                </Col>
            </Row>
        </Container>
    </div>
    )
}
