
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createOperation, updateOperation } from '../store/operationsSlice.js';
import { FaSave, FaTimes } from 'react-icons/fa';

const OperationModal = ({ show, onHide, operation = null }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    نوع_العملية: '',
    التاريخ: '',
    الطائرات: '',
    عدد_الطائرات: '',
    المركز: '',
    التشكيل_المنفذ: '',
    من_إلى: '',
    الهدف: '',
    الاتجاه_الاستراتيجي: '',
    الحالة: ''
  });

  useEffect(() => {
    if (operation) {
      setFormData(operation);
    } else {
      setFormData({
        نوع_العملية: '',
        التاريخ: '',
        الطائرات: '',
        عدد_الطائرات: '',
        المركز: '',
        التشكيل_المنفذ: '',
        من_إلى: '',
        الهدف: '',
        الاتجاه_الاستراتيجي: '',
        الحالة: ''
      });
    }
  }, [operation, show]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (operation) {
      dispatch(updateOperation({ ...formData, id: operation.id }));
    } else {
      dispatch(createOperation(formData));
    }
    onHide();
  };

  if (!show) return null;

  return (
    <div className="modal fade show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">
              {operation ? 'تعديل العملية' : 'إضافة عملية جديدة'}
            </h5>
            <button type="button" className="btn-close" onClick={onHide}></button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="modal-body">
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label">نوع العملية</label>
                  <input
                    type="text"
                    className="form-control"
                    name="نوع_العملية"
                    value={formData.نوع_العملية}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">التاريخ</label>
                  <input
                    type="date"
                    className="form-control"
                    name="التاريخ"
                    value={formData.التاريخ}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">الطائرات</label>
                  <input
                    type="text"
                    className="form-control"
                    name="الطائرات"
                    value={formData.الطائرات}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">عدد الطائرات</label>
                  <input
                    type="number"
                    className="form-control"
                    name="عدد_الطائرات"
                    value={formData.عدد_الطائرات}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-12">
                  <label className="form-label">المركز</label>
                  <input
                    type="text"
                    className="form-control"
                    name="المركز"
                    value={formData.المركز}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-12">
                  <label className="form-label">التشكيل المنفذ</label>
                  <input
                    type="text"
                    className="form-control"
                    name="التشكيل_المنفذ"
                    value={formData.التشكيل_المنفذ}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-12">
                  <label className="form-label">من / إلى</label>
                  <input
                    type="text"
                    className="form-control"
                    name="من_إلى"
                    value={formData.من_إلى}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-12">
                  <label className="form-label">الهدف</label>
                  <textarea
                    className="form-control"
                    name="الهدف"
                    value={formData.الهدف}
                    onChange={handleChange}
                    rows="2"
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">الاتجاه الاستراتيجي</label>
                  <select
                    className="form-select"
                    name="الاتجاه_الاستراتيجي"
                    value={formData.الاتجاه_الاستراتيجي}
                    onChange={handleChange}
                    required
                  >
                    <option value="">اختر الاتجاه</option>
                    <option value="هجومي">هجومي</option>
                    <option value="دفاعي">دفاعي</option>
                    <option value="لوجستي">لوجستي</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label className="form-label">الحالة</label>
                  <select
                    className="form-select"
                    name="الحالة"
                    value={formData.الحالة}
                    onChange={handleChange}
                    required
                  >
                    <option value="">اختر الحالة</option>
                    <option value="مكتملة">مكتملة</option>
                    <option value="قيد التنفيذ">قيد التنفيذ</option>
                    <option value="مجدولة">مجدولة</option>
                    <option value="ملغية">ملغية</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={onHide}>
                <FaTimes className="me-1" />
                إلغاء
              </button>
              <button type="submit" className="btn btn-primary">
                <FaSave className="me-1" />
                حفظ
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OperationModal;
