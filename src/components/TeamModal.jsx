
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createTeamMember, updateTeamMember } from '../store/teamSlice.js';
import { FaSave, FaTimes } from 'react-icons/fa';

const TeamModal = ({ show, onHide, member = null, operationId }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    الاسم: '',
    الرتبة: '',
    التخصص: '',
    الدور: '',
    operationId: operationId
  });

  useEffect(() => {
    if (member) {
      setFormData(member);
    } else {
      setFormData({
        الاسم: '',
        الرتبة: '',
        التخصص: '',
        الدور: '',
        operationId: operationId
      });
    }
  }, [member, show, operationId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (member) {
      dispatch(updateTeamMember({ ...formData, id: member.id }));
    } else {
      dispatch(createTeamMember(formData));
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
              {member ? 'تعديل عضو الطاقم' : 'إضافة عضو جديد'}
            </h5>
            <button type="button" className="btn-close" onClick={onHide}></button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="modal-body">
              <div className="mb-3">
                <label className="form-label">الاسم</label>
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
                <label className="form-label">الرتبة</label>
                <input
                  type="text"
                  className="form-control"
                  name="الرتبة"
                  value={formData.الرتبة}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">التخصص</label>
                <input
                  type="text"
                  className="form-control"
                  name="التخصص"
                  value={formData.التخصص}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">الدور</label>
                <input
                  type="text"
                  className="form-control"
                  name="الدور"
                  value={formData.الدور}
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

export default TeamModal;
