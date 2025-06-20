
import React from 'react';
import { useSelector } from 'react-redux';
import { FaUsers, FaBomb, FaPaperclip } from 'react-icons/fa';

const SubTables = () => {
  const { selectedOperation, team, ammunition, attachments, loading } = useSelector(
    (state) => state.operations
  );

  if (!selectedOperation) {
    return (
      <div className="text-center p-5 fade-in" dir="rtl">
        <FaUsers size={48} className="text-muted mb-3" />
        <h5 className="text-muted">يرجى اختيار عملية لعرض التفاصيل</h5>
      </div>
    );
  }

  const operationTeam = team.filter(member => member.operationId === selectedOperation.id);
  const operationAmmunition = ammunition.filter(ammo => ammo.operationId === selectedOperation.id);
  const operationAttachments = attachments.filter(att => att.operationId === selectedOperation.id);

  if (loading) {
    return (
      <div className="text-center p-5">
        <div className="spinner-custom mx-auto mb-3"></div>
        <p>جارٍ تحميل البيانات...</p>
      </div>
    );
  }

  return (
    <div className="fade-in" dir="rtl">
      <div className="row g-4">
        <div className="col-lg-4">
          <div className="card card-custom h-100">
            <div className="card-header bg-primary text-white">
              <FaUsers className="me-2" />
              طاقم العملية ({operationTeam.length})
            </div>
            <div className="card-body p-0">
              {operationTeam.length > 0 ? (
                <table className="table table-hover mb-0">
                  <thead className="table-light">
                    <tr>
                      <th>الاسم</th>
                      <th>الرتبة</th>
                      <th>التخصص</th>
                      <th>الدور</th>
                    </tr>
                  </thead>
                  <tbody>
                    {operationTeam.map((member) => (
                      <tr key={member.id}>
                        <td className="fw-bold">{member.الاسم}</td>
                        <td>
                          <span className="badge bg-secondary">{member.الرتبة}</span>
                        </td>
                        <td>{member.التخصص}</td>
                        <td>{member.الدور}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <div className="p-3 text-center text-muted">
                  <FaUsers size={24} className="mb-2" />
                  <p>لا يوجد أعضاء في الطاقم</p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="card card-custom h-100">
            <div className="card-header bg-warning text-dark">
              <FaBomb className="me-2" />
              الذخيرة المستخدمة ({operationAmmunition.length})
            </div>
            <div className="card-body p-0">
              {operationAmmunition.length > 0 ? (
                <table className="table table-hover mb-0">
                  <thead className="table-light">
                    <tr>
                      <th>النوع</th>
                      <th>الكمية</th>
                      <th>الوحدة</th>
                    </tr>
                  </thead>
                  <tbody>
                    {operationAmmunition.map((ammo) => (
                      <tr key={ammo.id}>
                        <td className="fw-bold">{ammo.النوع}</td>
                        <td>
                          <span className="badge bg-warning text-dark">{ammo.الكمية}</span>
                        </td>
                        <td>{ammo.الوحدة}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <div className="p-3 text-center text-muted">
                  <FaBomb size={24} className="mb-2" />
                  <p>لا توجد ذخيرة مسجلة</p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="card card-custom h-100">
            <div className="card-header bg-info text-white">
              <FaPaperclip className="me-2" />
              المرفقات ({operationAttachments.length})
            </div>
            <div className="card-body p-0">
              {operationAttachments.length > 0 ? (
                <table className="table table-hover mb-0">
                  <thead className="table-light">
                    <tr>
                      <th>اسم الملف</th>
                      <th>النوع</th>
                      <th>الحجم</th>
                    </tr>
                  </thead>
                  <tbody>
                    {operationAttachments.map((attachment) => (
                      <tr key={attachment.id}>
                        <td className="fw-bold">{attachment.الاسم}</td>
                        <td>
                          <span className="badge bg-info">{attachment.النوع}</span>
                        </td>
                        <td>{attachment.الحجم}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <div className="p-3 text-center text-muted">
                  <FaPaperclip size={24} className="mb-2" />
                  <p>لا توجد مرفقات</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubTables;
