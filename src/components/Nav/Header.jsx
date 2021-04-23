import React, { useEffect, useRef, useState } from 'react'
import { Navbar, Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
import {FaReacteurope} from "react-icons/all";
import { motion } from "framer-motion";


export default function Header() {
    const [navBackground, setNavBackground] = useState(false)
    const navRef = useRef()
    navRef.current = navBackground
    useEffect(() => {
      const handleScroll = () => {
        const show = window.scrollY > 50
        if (navRef.current !== show) {
          setNavBackground(show)
        }
      }
      document.addEventListener('scroll', handleScroll)
      return () => {
        document.removeEventListener('scroll', handleScroll)
      }
    }, [])

    return (
            <Navbar variant="dark" expand="md" fixed="top"
            style={{ transition: '1s ease',backgroundColor: navBackground ? '#626579' : '#1f2235'}}
            className="nav-theme justify-content-between">
            <motion.div initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.8 }}>
            <Navbar.Brand as={Link} to="/home" className="logo"><FaReacteurope className="headerIcon-logo" />Web Wonders</Navbar.Brand>
            </motion.div>
            <motion.div initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.8 }}>
            <Navbar.Toggle aria-controls="basic-navbar-nav" className='toggle'/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="justify-content-end">
                    <Nav.Link className='link' as={Link} to="/Jose">Jose</Nav.Link>
                    <Nav.Link className='link' as={Link} to="/Rubin">Rubin</Nav.Link>
                    <Nav.Link className='link' as={Link} to="/Mudassar">Mudassar</Nav.Link>
                    <Nav.Link className='link' as={Link} to="/Simon">Simon</Nav.Link>
                    <Nav.Link className='link' as={Link} to="/Behrad">Behrad</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </motion.div>
        </Navbar>
          
    )
}
