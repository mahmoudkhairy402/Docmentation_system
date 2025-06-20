
import React from 'react';
import { useSelector } from 'react-redux';
import { Row, Col, Card, Table, Badge } from 'react-bootstrap';
import { RootState } from '../store';
import { FaUsers, FaBomb, FaPaperclip, FaSpinner } from 'react-icons/fa';

const SubTables: React.FC = () => {
  const { selectedOperation, team, ammunition, attachments, loading } = useSelector(
    (state: RootState) => state.operations
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
      <Row className="g-4">
        {/* Team Table */}
        <Col lg={4}>
          <Card className="card-custom h-100">
            <Card.Header className="bg-primary text-white">
              <FaUsers className="me-2" />
              طاقم العملية ({operationTeam.length})
            </Card.Header>
            <Card.Body className="p-0">
              {operationTeam.length > 0 ? (
                <Table hover className="mb-0">
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
                          <Badge bg="secondary">{member.الرتبة}</Badge>
                        </td>
                        <td>{member.التخصص}</td>
                        <td>{member.الدور}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              ) : (
                <div className="text-center p-4 text-muted">
                  <FaUsers size={24} className="mb-2" />
                  <p>لا توجد بيانات طاقم</p>
                </div>
              )}
            </Card.Body>
          </Card>
        </Col>

        {/* Ammunition Table */}
        <Col lg={4}>
          <Card className="card-custom h-100">
            <Card.Header className="bg-warning text-dark">
              <FaBomb className="me-2" />
              الذخيرة ({operationAmmunition.length})
            </Card.Header>
            <Card.Body className="p-0">
              {operationAmmunition.length > 0 ? (
                <Table hover className="mb-0">
                  <thead className="table-light">
                    <tr>
                      <th>النوع</th>
                      <th>الكمية</th>
                      <th>الوحدة</th>
                      <th>المصدر</th>
                    </tr>
                  </thead>
                  <tbody>
                    {operationAmmunition.map((ammo) => (
                      <tr key={ammo.id}>
                        <td className="fw-bold">{ammo.النوع}</td>
                        <td>
                          <Badge bg="info">{ammo.الكمية}</Badge>
                        </td>
                        <td>{ammo.الوحدة}</td>
                        <td>{ammo.المصدر}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              ) : (
                <div className="text-center p-4 text-muted">
                  <FaBomb size={24} className="mb-2" />
                  <p>لا توجد بيانات ذخيرة</p>
                </div>
              )}
            </Card.Body>
          </Card>
        </Col>

        {/* Attachments Table */}
        <Col lg={4}>
          <Card className="card-custom h-100">
            <Card.Header className="bg-success text-white">
              <FaPaperclip className="me-2" />
              المرفقات ({operationAttachments.length})
            </Card.Header>
            <Card.Body className="p-0">
              {operationAttachments.length > 0 ? (
                <Table hover className="mb-0">
                  <thead className="table-light">
                    <tr>
                      <th>الاسم</th>
                      <th>النوع</th>
                      <th>الحجم</th>
                      <th>التاريخ</th>
                    </tr>
                  </thead>
                  <tbody>
                    {operationAttachments.map((attachment) => (
                      <tr key={attachment.id}>
                        <td className="fw-bold">{attachment.الاسم}</td>
                        <td>
                          <Badge bg="dark">{attachment.النوع}</Badge>
                        </td>
                        <td>{attachment.الحجم}</td>
                        <td>{attachment.التاريخ}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              ) : (
                <div className="text-center p-4 text-muted">
                  <FaPaperclip size={24} className="mb-2" />
                  <p>لا توجد مرفقات</p>
                </div>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default SubTables;
