import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteOperation } from "../store/operationsSlice.js";
import { exportToExcel } from "../utils/excelExport.js";
import OperationModal from "./OperationModal.jsx";
import { FaPlus, FaEdit, FaTrash, FaDownload } from "react-icons/fa";

const ActionButtons = () => {
  const { operations, selectedOperation } = useSelector(
    (state) => state.operations
  );
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [editingOperation, setEditingOperation] = useState(null);

  const handleAdd = () => {
    setEditingOperation(null);
    setShowModal(true);
  };

  const handleEdit = () => {
    if (selectedOperation) {
      setEditingOperation(selectedOperation);
      setShowModal(true);
    } else {
      alert("يرجى اختيار عملية للتعديل");
    }
  };

  const handleDelete = () => {
    if (selectedOperation) {
      if (window.confirm("هل أنت متأكد من حذف هذه العملية؟")) {
        dispatch(deleteOperation(selectedOperation.id));
      }
    } else {
      alert("يرجى اختيار عملية للحذف");
    }
  };

  const handleExport = () => {
    if (operations.length > 0) {
      exportToExcel(operations, "العمليات_الجوية");
    } else {
      alert("لا توجد بيانات للتصدير");
    }
  };

  return (
    <>
      <div
        className="d-flex justify-content-between align-items-center mb-4 fade-in"
        dir="rtl"
      >
        <h4 className="mb-0">
          <FaPlus className="me-2 text-primary" />
          مهام العمليات الجوية
        </h4>
        <div className="btn-group d-flex gap-3">
          <button
            className="btn btn-success btn-custom rounded-2 m-0"
            onClick={handleAdd}
          >
            إضافة جديد
            <FaPlus className="me-1" />
          </button>
          <button
            className="btn btn-primary btn-custom rounded-2"
            onClick={handleEdit}
          >
            تعديل
            <FaEdit className="me-1" />
          </button>
          <button
            className="btn btn-danger btn-custom rounded-2"
            onClick={handleDelete}
          >
            حذف
            <FaTrash className="me-1" />
          </button>
          {/* <button
            className="btn btn-secondary btn-custom rounded-2"
            onClick={handleExport}
          >
            تصدير
            <FaDownload className="me-1" />
          </button> */}
        </div>
      </div>

      <OperationModal
        show={showModal}
        onHide={() => setShowModal(false)}
        operation={editingOperation}
      />
    </>
  );
};

export default ActionButtons;
