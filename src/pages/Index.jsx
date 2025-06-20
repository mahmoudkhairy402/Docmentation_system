
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../store';
import CustomNavbar from '../components/Navbar.jsx';
import ThemeToggle from '../components/ThemeToggle.jsx';
import ActionButtons from '../components/ActionButtons.jsx';
import OperationsTable from '../components/OperationsTable.jsx';
import SubTables from '../components/SubTables.jsx';

const Index = () => {
  return (
    <Provider store={store}>
      <div className="min-vh-100" dir="rtl">
        <CustomNavbar />
        <ThemeToggle />
        
        <div className="container-fluid py-4">
          <div className="row">
            <div className="col">
              <ActionButtons />
              
              {/* Main Operations Table */}
              <div className="mb-4">
                <OperationsTable />
              </div>
              
              {/* Sub Tables */}
              <SubTables />
            </div>
          </div>
        </div>
      </div>
    </Provider>
  );
};

export default Index;
