import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectOperation } from "../store/operationsSlice.js";
import { FaPlane, FaMapMarkerAlt, FaFlag } from "react-icons/fa";

const OperationsTable = () => {
  const { operations, selectedOperation } = useSelector(
    (state) => state.operations
  );
  const dispatch = useDispatch();

  const handleRowClick = (operation) => {
    dispatch(selectOperation(operation));
  };

  const getStatusBadge = (status) => {
    const statusColors = {
      مكتملة: "success",
      "قيد التنفيذ": "warning",
      مجدولة: "info",
      ملغية: "danger",
    };
    return `badge bg-${statusColors[status] || "secondary"}`;
  };

  return (
    <div className="table-custom fade-in" dir="rtl">
      <table className="table table-hover table-responsive mb-0">
        <thead>
          <tr>
            <th>
              <FaFlag className="me-2" />
              نوع العملية
            </th>
            <th>التاريخ</th>
            <th>
              <FaPlane className="me-2" />
              الطائرات
            </th>
            <th>عدد الطائرات</th>
            <th>
              <FaMapMarkerAlt className="me-2" />
              المركز
            </th>
            <th>التشكيل المنفذ</th>
            <th>من / إلى</th>
            <th>الهدف</th>
            <th>الاتجاه الاستراتيجي</th>
            <th>الحالة</th>
          </tr>
        </thead>
        <tbody>
          {operations.map((operation) => (
            <tr
              key={operation.id}
              className={`table-row-hover ${
                selectedOperation?.id === operation.id
                  ? "table-row-selected"
                  : ""
              }`}
              onClick={() => handleRowClick(operation)}
            >
              <td className="fw-bold">{operation.نوع_العملية}</td>
              <td>{operation.التاريخ}</td>
              <td>
                <span className="badge bg-primary">{operation.الطائرات}</span>
              </td>
              <td>
                <span className="badge bg-info">{operation.عدد_الطائرات}</span>
              </td>
              <td>{operation.المركز}</td>
              <td>{operation.التشكيل_المنفذ}</td>
              <td>{operation.من_إلى}</td>
              <td>{operation.الهدف}</td>
              <td>
                <span
                  className={`badge ${
                    operation.الاتجاه_الاستراتيجي === "هجومي"
                      ? "bg-danger"
                      : operation.الاتجاه_الاستراتيجي === "دفاعي"
                      ? "bg-success"
                      : "bg-secondary"
                  }`}
                >
                  {operation.الاتجاه_الاستراتيجي}
                </span>
              </td>
              <td>
                <span className={getStatusBadge(operation.الحالة)}>
                  {operation.الحالة}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OperationsTable;
