import { Col } from 'react-bootstrap';
  import { Link } from 'react-router-dom';
  import './Footer.css';
  import {
      FaFacebookF,
      FaLinkedin,
      FaInstagram,
      AiFillGithub
    } from "react-icons/all";
    
export default function Footer() {


    return (
      <div className="footer">
        <div className="row-footer">
          <Col md={12}>
            <div className="row">
              <Col md={3} className='col-title'>
                <div className="footer-title">
                  About us
                </div>
                <p>
                  Logo
                </p>
                <div className="footer-social-links">
                <li>
                    <a className='banner-a' href="https://se.linkedin.com/in/behrad-hashemzadebalov-0692971b6" target="_blank" rel='opener noreferrer'>
                    <FaLinkedin className="headerIcon" />
                    </a>
                  </li>
                    <li>
                      <a className='banner-a' href="https://github.com/berra-web" target="_blank" rel="noopener noreferrer">
                      <AiFillGithub className="headerIcon" />
                      </a>
                    </li>
                    <li>
                      <a className='banner-a' href="https://www.facebook.com/behrad.hz" target="_blank" rel="noopener noreferrer">
                      <FaFacebookF className="headerIcon" />
                      </a>
                    </li>
                    <li>
                      <a className='banner-a' href="https://www.instagram.com/berrabalov/" target="_blank" rel="noopener noreferrer">
                      <FaInstagram className="headerIcon" />
                      </a>
                    </li>
                </div>
              </Col>
              <Col md={3} className='col-title'>
                <div className="footer-title">
                  Latest
                </div>
                <div className="footer-links">
                  <Link to="#">Appointment</Link>
                  <Link to="#">Health center</Link>
                  <Link to="#">Quality</Link>
                  <Link to="#">Wallstreet</Link>
                </div>
              </Col>
              <Col md={3}className='col-title'>
                <div className="footer-title">
                  Quick Links
                </div>
                <div className="footer-links">
                  <Link to="#">Blog</Link>
                  <Link to="#">FAQ</Link>
                  <Link to="#">Terms & conditions</Link>
                  <Link to="#">Privacy policy</Link>
                </div>
              </Col>
              <Col md={3} className='col-title'>
                <div className="footer-title">
                  Support
                </div>
                <div className="footer-links">
                  <Link to="#">Affiliate</Link>
                  <Link to="#">Login</Link>
                  <Link to="#">All theme package</Link>
                  <Link to="#">Support forum</Link>
                </div>
              </Col>
            </div>
          </Col>
        </div>
      </div>
    )
}

