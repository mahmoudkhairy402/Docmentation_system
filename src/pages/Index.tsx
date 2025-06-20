
import React from 'react';
import { Provider } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import { store } from '../store';
import CustomNavbar from '../components/Navbar';
import ThemeToggle from '../components/ThemeToggle';
import ActionButtons from '../components/ActionButtons';
import OperationsTable from '../components/OperationsTable';
import SubTables from '../components/SubTables';

const Index = () => {
  return (
    <Provider store={store}>
      <div className="min-vh-100" dir="rtl">
        <CustomNavbar />
        <ThemeToggle />
        
        <Container fluid className="py-4">
          <Row>
            <Col>
              <ActionButtons />
              
              {/* Main Operations Table */}
              <div className="mb-4">
                <OperationsTable />
              </div>
              
              {/* Sub Tables */}
              <SubTables />
            </Col>
          </Row>
        </Container>
      </div>
    </Provider>
  );
};

export default Index;
