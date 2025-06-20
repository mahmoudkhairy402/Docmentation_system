
import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import { FaPlus, FaEdit, FaTrash, FaDownload } from 'react-icons/fa';

const ActionButtons: React.FC = () => {
  return (
    <div className="d-flex justify-content-between align-items-center mb-4 fade-in" dir="rtl">
      <h4 className="mb-0">
        <FaPlus className="me-2 text-primary" />
        مهام العمليات الجوية
      </h4>
      <ButtonGroup>
        <Button variant="success" className="btn-custom">
          <FaPlus className="me-1" />
          إضافة جديد
        </Button>
        <Button variant="primary" className="btn-custom">
          <FaEdit className="me-1" />
          تعديل
        </Button>
        <Button variant="danger" className="btn-custom">
          <FaTrash className="me-1" />
          حذف
        </Button>
        <Button variant="info" className="btn-custom">
          <FaDownload className="me-1" />
          تصدير
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default ActionButtons;
