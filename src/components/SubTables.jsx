import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTeamMember } from "../store/teamSlice.js";
import { deleteAmmunition } from "../store/ammunitionSlice.js";
import { deleteAttachment } from "../store/attachmentsSlice.js";
import TeamModal from "./TeamModal.jsx";
import AmmunitionModal from "./AmmunitionModal.jsx";
import AttachmentModal from "./AttachmentModal.jsx";
import {
  FaUsers,
  FaBomb,
  FaPaperclip,
  FaPlus,
  FaEdit,
  FaTrash,
} from "react-icons/fa";

const SubTables = () => {
  const { selectedOperation } = useSelector((state) => state.operations);
  const { members: team, loading: teamLoading } = useSelector((state) => state.team);
  const { items: ammunition, loading: ammunitionLoading } = useSelector((state) => state.ammunition);
  const { items: attachments, loading: attachmentsLoading } = useSelector((state) => state.attachments);
  
  const loading = teamLoading || ammunitionLoading || attachmentsLoading;
  const dispatch = useDispatch();

  const [showTeamModal, setShowTeamModal] = useState(false);
  const [showAmmunitionModal, setShowAmmunitionModal] = useState(false);
  const [showAttachmentModal, setShowAttachmentModal] = useState(false);
  const [editingTeam, setEditingTeam] = useState(null);
  const [editingAmmunition, setEditingAmmunition] = useState(null);
  const [editingAttachment, setEditingAttachment] = useState(null);

  if (!selectedOperation) {
    return (
      <div className="text-center p-5 fade-in" dir="rtl">
        <FaUsers size={48} className=" mb-3" />
        <h5 className="">يرجى اختيار عملية لعرض التفاصيل</h5>
      </div>
    );
  }

  const operationTeam = team.filter(
    (member) => member.operationId === selectedOperation.id
  );
  const operationAmmunition = ammunition.filter(
    (ammo) => ammo.operationId === selectedOperation.id
  );
  const operationAttachments = attachments.filter(
    (att) => att.operationId === selectedOperation.id
  );

  if (loading) {
    return (
      <div className="text-center p-5">
        <div className="spinner-custom mx-auto mb-3"></div>
        <p>جارٍ تحميل البيانات...</p>
      </div>
    );
  }

  // Team handlers
  const handleAddTeam = () => {
    setEditingTeam(null);
    setShowTeamModal(true);
  };

  const handleEditTeam = (member) => {
    setEditingTeam(member);
    setShowTeamModal(true);
  };

  const handleDeleteTeam = (id) => {
    if (window.confirm("هل أنت متأكد من حذف هذا العضو؟")) {
      dispatch(deleteTeamMember(id));
    }
  };

  // Ammunition handlers
  const handleAddAmmunition = () => {
    setEditingAmmunition(null);
    setShowAmmunitionModal(true);
  };

  const handleEditAmmunition = (ammo) => {
    setEditingAmmunition(ammo);
    setShowAmmunitionModal(true);
  };

  const handleDeleteAmmunition = (id) => {
    if (window.confirm("هل أنت متأكد من حذف هذه الذخيرة؟")) {
      dispatch(deleteAmmunition(id));
    }
  };

  // Attachment handlers
  const handleAddAttachment = () => {
    setEditingAttachment(null);
    setShowAttachmentModal(true);
  };

  const handleEditAttachment = (attachment) => {
    setEditingAttachment(attachment);
    setShowAttachmentModal(true);
  };

  const handleDeleteAttachment = (id) => {
    if (window.confirm("هل أنت متأكد من حذف هذا المرفق؟")) {
      dispatch(deleteAttachment(id));
    }
  };

  return (
    <>
      <div className="fade-in" dir="rtl">
        <div className="row g-4">
          <div className="col-lg-4">
            <div className="card card-custom h-100">
              <div className="card-header bg-secondary text-white d-flex justify-content-between align-items-center">
                <span>
                  <FaUsers className="me-2" />
                  طاقم العملية ({operationTeam.length})
                </span>
                <button
                  className="btn btn-light btn-sm"
                  onClick={handleAddTeam}
                >
                  <FaPlus />
                </button>
              </div>
              <div className="card-body p-0">
                {operationTeam.length > 0 ? (
                  <table className="table table-hover mb-0 table-custom">
                    <thead className="table-light">
                      <tr>
                        <th>الاسم</th>
                        <th>الرتبة</th>
                        <th>التخصص</th>
                        <th>الدور</th>
                        <th>إجراءات</th>
                      </tr>
                    </thead>
                    <tbody>
                      {operationTeam.map((member) => (
                        <tr key={member.id}>
                          <td className="fw-bold">{member.الاسم}</td>
                          <td>
                            <span className="badge bg-secondary">
                              {member.الرتبة}
                            </span>
                          </td>
                          <td>{member.التخصص}</td>
                          <td>{member.الدور}</td>
                          <td>
                            <button
                              className="btn btn-sm btn-outline-primary me-1"
                              onClick={() => handleEditTeam(member)}
                            >
                              <FaEdit />
                            </button>
                            <button
                              className="btn btn-sm btn-outline-danger"
                              onClick={() => handleDeleteTeam(member.id)}
                            >
                              <FaTrash />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  <div
                    className="p-3 text-center"
                    style={{ color: "var(--text-primary)" }}
                  >
                    <FaUsers size={24} className="mb-2" />
                    <p>لا يوجد أعضاء في الطاقم</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="card card-custom h-100">
              <div className="card-header bg-secondary text-white text-dark d-flex justify-content-between align-items-center">
                <span>
                  <FaBomb className="me-2" />
                  الذخيرة المستخدمة ({operationAmmunition.length})
                </span>
                <button
                  className="btn btn-dark btn-sm"
                  onClick={handleAddAmmunition}
                >
                  <FaPlus />
                </button>
              </div>
              <div className="card-body p-0">
                {operationAmmunition.length > 0 ? (
                  <table className="table table-hover mb-0 table-custom">
                    <thead className="table-light">
                      <tr>
                        <th>النوع</th>
                        <th>الكمية</th>
                        <th>الوحدة</th>
                        <th>إجراءات</th>
                      </tr>
                    </thead>
                    <tbody>
                      {operationAmmunition.map((ammo) => (
                        <tr key={ammo.id}>
                          <td className="fw-bold">{ammo.النوع}</td>
                          <td>
                            <span className="badge bg-warning text-dark">
                              {ammo.الكمية}
                            </span>
                          </td>
                          <td>{ammo.الوحدة}</td>
                          <td>
                            <button
                              className="btn btn-sm btn-outline-primary me-1"
                              onClick={() => handleEditAmmunition(ammo)}
                            >
                              <FaEdit />
                            </button>
                            <button
                              className="btn btn-sm btn-outline-danger"
                              onClick={() => handleDeleteAmmunition(ammo.id)}
                            >
                              <FaTrash />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  <div
                    className="p-3 text-center"
                    style={{ color: "var(--text-primary)" }}
                  >
                    <FaBomb size={24} className="mb-2" />
                    <p>لا توجد ذخيرة مسجلة</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="card card-custom h-100">
              <div className="card-header bg-secondary text-white d-flex justify-content-between align-items-center">
                <span>
                  <FaPaperclip className="me-2" />
                  المرفقات ({operationAttachments.length})
                </span>
                <button
                  className="btn btn-light btn-sm"
                  onClick={handleAddAttachment}
                >
                  <FaPlus />
                </button>
              </div>
              <div className="card-body p-0">
                {operationAttachments.length > 0 ? (
                  <table className="table table-hover mb-0 table-custom">
                    <thead className="table-light">
                      <tr>
                        <th>اسم الملف</th>
                        <th>النوع</th>
                        <th>الحجم</th>
                        <th>إجراءات</th>
                      </tr>
                    </thead>
                    <tbody>
                      {operationAttachments.map((attachment) => (
                        <tr key={attachment.id}>
                          <td className="fw-bold">{attachment.الاسم}</td>
                          <td>
                            <span className="badge bg-info">
                              {attachment.النوع}
                            </span>
                          </td>
                          <td>{attachment.الحجم}</td>
                          <td>
                            <button
                              className="btn btn-sm btn-outline-primary me-1"
                              onClick={() => handleEditAttachment(attachment)}
                            >
                              <FaEdit />
                            </button>
                            <button
                              className="btn btn-sm btn-outline-danger"
                              onClick={() =>
                                handleDeleteAttachment(attachment.id)
                              }
                            >
                              <FaTrash />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  <div
                    className="p-3 text-center"
                    style={{ color: "var(--text-primary)" }}
                  >
                    <FaPaperclip size={24} className="mb-2" />
                    <p>لا توجد مرفقات</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      <TeamModal
        show={showTeamModal}
        onHide={() => setShowTeamModal(false)}
        member={editingTeam}
        operationId={selectedOperation.id}
      />

      <AmmunitionModal
        show={showAmmunitionModal}
        onHide={() => setShowAmmunitionModal(false)}
        ammunition={editingAmmunition}
        operationId={selectedOperation.id}
      />

      <AttachmentModal
        show={showAttachmentModal}
        onHide={() => setShowAttachmentModal(false)}
        attachment={editingAttachment}
        operationId={selectedOperation.id}
      />
    </>
  );
};

export default SubTables;
