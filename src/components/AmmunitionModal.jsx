
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createAmmunition, updateAmmunition } from '../store/ammunitionSlice.js';
import { FaSave, FaTimes } from 'react-icons/fa';

const AmmunitionModal = ({ show, onHide, ammunition = null, operationId }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    النوع: '',
    الكمية: '',
    الوحدة: '',
    المصدر: '',
    operationId: operationId
  });

  useEffect(() => {
    if (ammunition) {
      setFormData(ammunition);
    } else {
      setFormData({
        النوع: '',
        الكمية: '',
        الوحدة: '',
        المصدر: '',
        operationId: operationId
      });
    }
  }, [ammunition, show, operationId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (ammunition) {
      dispatch(updateAmmunition({ ...formData, id: ammunition.id }));
    } else {
      dispatch(createAmmunition(formData));
    }
    onHide();
  };

  if (!show) return null;

  return (
    <div className="modal fade show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">
              {ammunition ? 'تعديل الذخيرة' : 'إضافة ذخيرة جديدة'}
            </h5>
            <button type="button" className="btn-close" onClick={onHide}></button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="modal-body">
              <div className="mb-3">
                <label className="form-label">النوع</label>
                <input
                  type="text"
                  className="form-control"
                  name="النوع"
                  value={formData.النوع}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">الكمية</label>
                <input
                  type="number"
                  className="form-control"
                  name="الكمية"
                  value={formData.الكمية}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">الوحدة</label>
                <input
                  type="text"
                  className="form-control"
                  name="الوحدة"
                  value={formData.الوحدة}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">المصدر</label>
                <input
                  type="text"
                  className="form-control"
                  name="المصدر"
                  value={formData.المصدر}
                  onChange={handleChange}
                  required
                />
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

export default AmmunitionModal;
