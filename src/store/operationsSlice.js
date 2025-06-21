
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  operations: [
    {
      id: 1,
      نوع_العملية: "عملية استطلاع",
      التاريخ: "2024-06-20",
      الطائرات: "F-16",
      عدد_الطائرات: 4,
      المركز: "القاعدة الجوية الشرقية",
      التشكيل_المنفذ: "السرب الأول",
      من_إلى: "القاعدة - المنطقة الشمالية",
      الهدف: "استطلاع الحدود",
      الاتجاه_الاستراتيجي: "دفاعي",
      الحالة: "مكتملة"
    },
    {
      id: 2,
      نوع_العملية: "عملية قتالية",
      التاريخ: "2024-06-19",
      الطائرات: "F-35",
      عدد_الطائرات: 2,
      المركز: "القاعدة الجوية الغربية",
      التشكيل_المنفذ: "السرب الثاني",
      من_إلى: "القاعدة - المنطقة الجنوبية",
      الهدف: "تدمير أهداف محددة",
      الاتجاه_الاستراتيجي: "هجومي",
      الحالة: "قيد التنفيذ"
    },
    {
      id: 3,
      نوع_العملية: "عملية نقل",
      التاريخ: "2024-06-18",
      الطائرات: "C-130",
      عدد_الطائرات: 3,
      المركز: "القاعدة الجوية المركزية",
      التشكيل_المنفذ: "السرب الثالث",
      من_إلى: "القاعدة المركزية - القاعدة الشمالية",
      الهدف: "نقل المعدات والأفراد",
      الاتجاه_الاستراتيجي: "لوجستي",
      الحالة: "مجدولة"
    }
  ],
  selectedOperation: null,
  team: [
    { id: 1, operationId: 1, الاسم: "أحمد محمد", الرتبة: "نقيب", التخصص: "طيار", الدور: "قائد الطائرة" },
    { id: 2, operationId: 1, الاسم: "محمد علي", الرتبة: "ملازم أول", التخصص: "ملاح", الدور: "ملاح مساعد" },
    { id: 3, operationId: 2, الاسم: "علي حسن", الرتبة: "رائد", التخصص: "طيار", الدور: "قائد المهمة" },
  ],
  ammunition: [
    { id: 1, operationId: 1, النوع: "صواريخ جو-جو", الكمية: 4, الوحدة: "قطعة", المصدر: "المخزن الرئيسي" },
    { id: 2, operationId: 2, النوع: "قنابل موجهة", الكمية: 8, الوحدة: "قطعة", المصدر: "المخزن المتقدم" },
    { id: 3, operationId: 1, النوع: "ذخيرة المدفع", الكمية: 500, الوحدة: "طلقة", المصدر: "المخزن الرئيسي" },
  ],
  attachments: [
    { id: 1, operationId: 1, الاسم: "خطة الطيران", النوع: "PDF", الحجم: "2.5 MB", التاريخ: "2024-06-19" },
    { id: 2, operationId: 1, الاسم: "صور الهدف", النوع: "JPG", الحجم: "15.2 MB", التاريخ: "2024-06-19" },
    { id: 3, operationId: 2, الاسم: "تقرير المهمة", النوع: "DOCX", الحجم: "1.8 MB", التاريخ: "2024-06-18" },
  ],
  loading: false,
  error: null,
  nextId: 4,
  nextTeamId: 4,
  nextAmmunitionId: 4,
  nextAttachmentId: 4,
};

const operationsSlice = createSlice({
  name: 'operations',
  initialState,
  reducers: {
    selectOperation: (state, action) => {
      state.selectedOperation = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    addOperation: (state, action) => {
      state.operations.push({ ...action.payload, id: state.nextId });
      state.nextId += 1;
    },
    updateOperation: (state, action) => {
      const index = state.operations.findIndex(op => op.id === action.payload.id);
      if (index !== -1) {
        state.operations[index] = action.payload;
      }
    },
    deleteOperation: (state, action) => {
      state.operations = state.operations.filter(op => op.id !== action.payload);
      // Remove related team, ammunition, and attachments
      state.team = state.team.filter(member => member.operationId !== action.payload);
      state.ammunition = state.ammunition.filter(ammo => ammo.operationId !== action.payload);
      state.attachments = state.attachments.filter(att => att.operationId !== action.payload);
      if (state.selectedOperation?.id === action.payload) {
        state.selectedOperation = null;
      }
    },
    // Team actions
    addTeamMember: (state, action) => {
      state.team.push({ ...action.payload, id: state.nextTeamId });
      state.nextTeamId += 1;
    },
    updateTeamMember: (state, action) => {
      const index = state.team.findIndex(member => member.id === action.payload.id);
      if (index !== -1) {
        state.team[index] = action.payload;
      }
    },
    deleteTeamMember: (state, action) => {
      state.team = state.team.filter(member => member.id !== action.payload);
    },
    // Ammunition actions
    addAmmunition: (state, action) => {
      state.ammunition.push({ ...action.payload, id: state.nextAmmunitionId });
      state.nextAmmunitionId += 1;
    },
    updateAmmunition: (state, action) => {
      const index = state.ammunition.findIndex(ammo => ammo.id === action.payload.id);
      if (index !== -1) {
        state.ammunition[index] = action.payload;
      }
    },
    deleteAmmunition: (state, action) => {
      state.ammunition = state.ammunition.filter(ammo => ammo.id !== action.payload);
    },
    // Attachment actions
    addAttachment: (state, action) => {
      state.attachments.push({ ...action.payload, id: state.nextAttachmentId });
      state.nextAttachmentId += 1;
    },
    updateAttachment: (state, action) => {
      const index = state.attachments.findIndex(att => att.id === action.payload.id);
      if (index !== -1) {
        state.attachments[index] = action.payload;
      }
    },
    deleteAttachment: (state, action) => {
      state.attachments = state.attachments.filter(att => att.id !== action.payload);
    },
  },
});

export const { 
  selectOperation, 
  setLoading, 
  addOperation, 
  updateOperation, 
  deleteOperation,
  addTeamMember,
  updateTeamMember,
  deleteTeamMember,
  addAmmunition,
  updateAmmunition,
  deleteAmmunition,
  addAttachment,
  updateAttachment,
  deleteAttachment
} = operationsSlice.actions;

export default operationsSlice.reducer;
