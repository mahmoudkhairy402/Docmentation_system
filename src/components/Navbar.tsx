
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaDatabase, FaEdit, FaChartBar, FaCog } from 'react-icons/fa';

const CustomNavbar: React.FC = () => {
  return (
    <Navbar expand="lg" className="navbar-custom" dir="rtl">
      <Container>
        <Navbar.Brand href="#" className="text-white fw-bold">
          <FaDatabase className="me-2" />
          نظام إدارة العمليات الجوية
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#" className="text-white">
              <FaDatabase className="me-1" />
              البيانات الأساسية
            </Nav.Link>
            <Nav.Link href="#" className="text-white">
              <FaEdit className="me-1" />
              تسجيل بيانات
            </Nav.Link>
            <Nav.Link href="#" className="text-white">
              <FaChartBar className="me-1" />
              التقارير
            </Nav.Link>
            <Nav.Link href="#" className="text-white">
              <FaCog className="me-1" />
              الإعدادات
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
