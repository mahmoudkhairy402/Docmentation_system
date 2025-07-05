import React from "react";
import CustomNavbar from "../components/Navbar.jsx";
import ThemeToggle from "../components/ThemeToggle.jsx";
import ActionButtons from "../components/ActionButtons.jsx";
import OperationsTable from "../components/OperationsTable.jsx";
import SubTables from "../components/SubTables.jsx";

const Index = () => {
  return (
    <div className="min-vh-100" dir="rtl">
      <CustomNavbar />
      <ThemeToggle />

      <div className="container-fluid py-4">
        <div className="row">
          <div className="col">
            <ActionButtons />

            <div className="mb-4">
              <OperationsTable />
            </div>

            <SubTables />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
