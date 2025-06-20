
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
      state.operations.push(action.payload);
    },
    updateOperation: (state, action) => {
      const index = state.operations.findIndex(op => op.id === action.payload.id);
      if (index !== -1) {
        state.operations[index] = action.payload;
      }
    },
    deleteOperation: (state, action) => {
      state.operations = state.operations.filter(op => op.id !== action.payload);
      if (state.selectedOperation?.id === action.payload) {
        state.selectedOperation = null;
      }
    },
  },
});

export const { 
  selectOperation, 
  setLoading, 
  addOperation, 
  updateOperation, 
  deleteOperation 
} = operationsSlice.actions;

export default operationsSlice.reducer;
