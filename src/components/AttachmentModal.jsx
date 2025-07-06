
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createAttachment, updateAttachment } from '../store/attachmentsSlice.js';
import { FaSave, FaTimes } from 'react-icons/fa';

const AttachmentModal = ({ show, onHide, attachment = null, operationId }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    الاسم: '',
    النوع: '',
    الحجم: '',
    التاريخ: '',
    operationId: operationId
  });

  useEffect(() => {
    if (attachment) {
      setFormData(attachment);
    } else {
      setFormData({
        الاسم: '',
        النوع: '',
        الحجم: '',
        التاريخ: new Date().toISOString().split('T')[0],
        operationId: operationId
      });
    }
  }, [attachment, show, operationId]);

  const handleChange = (e) => {
    const {name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (attachment) {
      dispatch(updateAttachment({ ...formData, id: attachment.id }));
    } else {
      dispatch(createAttachment(formData));
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
              {attachment ? 'تعديل المرفق' : 'إضافة مرفق جديد'}
            </h5>
            <button type="button" className="btn-close" onClick={onHide}></button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="modal-body">
              <div className="mb-3">
                <label className="form-label">اسم الملف</label>
                <input
                  type="text"
                  className="form-control"
                  name="الاسم"
                  value={formData.الاسم}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">النوع</label>
                <select
                  className="form-select"
                  name="النوع"
                  value={formData.النوع}
                  onChange={handleChange}
                  required
                >
                  <option value="">اختر النوع</option>
                  <option value="PDF">PDF</option>
                  <option value="DOC">DOC</option>
                  <option value="DOCX">DOCX</option>
                  <option value="JPG">JPG</option>
                  <option value="PNG">PNG</option>
                  <option value="XLS">XLS</option>
                  <option value="XLSX">XLSX</option>
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label">الحجم</label>
                <input
                  type="text"
                  className="form-control"
                  name="الحجم"
                  value={formData.الحجم}
                  onChange={handleChange}
                  placeholder="مثال: 2.5 MB"
                  required
                />
              </div>
              <div className="mb-3">
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

export default AttachmentModal;
