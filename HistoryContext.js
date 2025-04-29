import React, { createContext, useContext, useState } from 'react';

const HistoryContext = createContext();

export const HistoryProvider = ({ children }) => {
  const [historyList, setHistoryList] = useState([]);

  // เพิ่มข้อมูลใหม่
  const addHistory = (item) => {
    setHistoryList((prev) => [...prev, item]);
  };

  // ลบข้อมูลตาม index
  const deleteHistory = (index) => {
    setHistoryList((prev) => prev.filter((_, i) => i !== index));
  };

  // แก้ไขข้อมูลตาม index
  const editHistory = (index, newItem) => {
    setHistoryList((prev) =>
      prev.map((item, i) => (i === index ? newItem : item))
    );
  };

  return (
    <HistoryContext.Provider value={{ historyList, addHistory, deleteHistory, editHistory }}>
      {children}
    </HistoryContext.Provider>
  );
};

// Hook ใช้เรียกใช้ History
export const useHistory = () => useContext(HistoryContext);
