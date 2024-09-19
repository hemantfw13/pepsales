import React from 'react';

const BlockDetailsModal = ({ block, onClose }) => {
  return (
    <div className="modal">
      <h3>{block.title} - Details</h3>
      <ul>
        {block.history.map((entry, index) => (
          <li key={index}>{entry}</li>
        ))}
      </ul>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default BlockDetailsModal;
