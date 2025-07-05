import React from "react";
import { Link } from "react-router-dom";
import { FaDatabase, FaSignInAlt } from "react-icons/fa";

const CustomNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-custom" dir="rtl">
      <div className=" container-fluid py-2">
        <a className="navbar-brand text-white fw-bold" href="#">
          <FaDatabase className="me-2" />
          نظام إدارة العمليات الجوية
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#basicNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="basicNavbar">
          <div className="navbar-nav ms-auto">
            <div className="d-flex align-items-center gap-3">
              <Link to="/login" className="btn btn-outline-light btn-sm">
                <FaSignInAlt className="me-1" />
                تسجيل الدخول
              </Link>
              <span className="badge bg-success">متصل</span>
              <span className="text-white fw-medium">أهلاً وسهلاً</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default CustomNavbar;
