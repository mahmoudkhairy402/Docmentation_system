
import React from 'react';
import { FaDatabase, FaEdit, FaChartBar, FaCog } from 'react-icons/fa';

const CustomNavbar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-custom" dir="rtl">
      <div className="container">
        <a className="navbar-brand text-white fw-bold" href="#">
          <FaDatabase className="me-2" />
          نظام إدارة العمليات الجوية
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#basicNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="basicNavbar">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                <FaDatabase className="me-1" />
                البيانات الأساسية
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                <FaEdit className="me-1" />
                تسجيل بيانات
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                <FaChartBar className="me-1" />
                التقارير
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                <FaCog className="me-1" />
                الإعدادات
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default CustomNavbar;
