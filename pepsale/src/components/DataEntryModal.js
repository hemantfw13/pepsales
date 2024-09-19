import React, { useState } from 'react';

const DataEntryModal = ({ onSubmit, onClose }) => {
  const [data, setData] = useState('');

  const handleSubmit = () => {
    onSubmit(data);
  };

  return (
    <div className="modal">
      <h3>Enter Transition Data</h3>
      <input type="text" value={data} onChange={(e) => setData(e.target.value)} />
      <button onClick={handleSubmit}>Submit</button>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default DataEntryModal;
