import React from 'react';
import {Container,Col,Row,} from "react-bootstrap";
import './Agil.css';
import { FaGithub, FaCamera, FaCircleNotch, FaApple, FaFileVideo, FaSearchDollar } from "react-icons/fa";
export default function Servise() {

  const [header] = React.useState({
    mainHeader: "Agil Grupp",
    subHeading: "Arbete",
    text: `Lorem Ipsum is simply dummy text of the printing and
    typesetting industry. Lorem Ipsum standard dummy text`
  });
  
  const [state] = React.useState([
    {
      id: 1,
      icon: <FaGithub className="commonIcons" />,
      heading: "Jose",
      text: "Lorem Ipsum is simply dummy text of the printing typesetting industry. simply dummy",
    },
    {
      id: 2,
      icon: <FaCamera className="commonIcons" />,
      heading: "Mudassar",
      text: "Lorem Ipsum is simply dummy text of the printing typesetting industry. simply dummy",
    },
    {
      id: 3,
      icon: <FaCircleNotch className="commonIcons" />,
      heading: "Rubbin",
      text: "Lorem Ipsum is simply dummy text of the printing typesetting industry. simply dummy",
    },
    {
      id: 4,
      icon: <FaApple className="commonIcons" />,
      heading: "Simon",
      text: "Lorem Ipsum is simply dummy text of the printing typesetting industry. simply dummy",
    },
    {
      id: 5,
      icon: <FaFileVideo className="commonIcons" />,
      heading: "Behrad",
      text: "Lorem Ipsum is simply dummy text of the printing typesetting industry. simply dummy",
    },
    {
      id: 6,
      icon: <FaSearchDollar className="commonIcons" />,
      heading: "Agil Grupp",
      text: "Lorem Ipsum is simply dummy text of the printing typesetting industry. simply dummy",
    },
  ]);
  
  return (
      <Container className='service-row' fluid>
        <Row>
          <Col className='col-services'>
            <h3 className="heading">{header.mainHeader}</h3>
            <h1 className="mainHeader">{header.subHeading}</h1>
            <p className="mainContent">{header.text}</p>
            <div className="commonBorder"></div>
          </Col>
        </Row>
        <Row >
          {state.map((info) => (
            <Col xs={12} md={6} lg={4} key={info.id}>
              <div className="services__box">
                {info.icon}
                <div className="services__box-header">{info.heading}</div>
                <div className="services__box-p">{info.text}</div>
              </div>
            </Col>
          ))}
        </Row>      
      </Container>
    )
}