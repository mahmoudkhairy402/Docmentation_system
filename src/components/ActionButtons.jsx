
import React from 'react';
import { FaPlus, FaEdit, FaTrash, FaDownload } from 'react-icons/fa';

const ActionButtons = () => {
  return (
    <div className="d-flex justify-content-between align-items-center mb-4 fade-in" dir="rtl">
      <h4 className="mb-0">
        <FaPlus className="me-2 text-primary" />
        مهام العمليات الجوية
      </h4>
      <div className="btn-group">
        <button className="btn btn-success btn-custom">
          <FaPlus className="me-1" />
          إضافة جديد
        </button>
        <button className="btn btn-primary btn-custom">
          <FaEdit className="me-1" />
          تعديل
        </button>
        <button className="btn btn-danger btn-custom">
          <FaTrash className="me-1" />
          حذف
        </button>
        <button className="btn btn-info btn-custom">
          <FaDownload className="me-1" />
          تصدير
        </button>
      </div>
    </div>
  );
};

export default ActionButtons;
