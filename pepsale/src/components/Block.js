import React, { useState } from 'react';
import BlockDetailsModal from './BlockDetailsModal';
import DataEntryModal from './DataEntryModal';
import { updateBlockHistory } from '../utils/history';

const Block = ({ block }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [showDataEntry, setShowDataEntry] = useState(false);

  const handleDrop = () => {
    setShowDataEntry(true);
  };

  const handleDataSubmit = (data) => {
    updateBlockHistory(block.id, data);
    setShowDataEntry(false);
  };

  return (
    <div className="block" draggable onDragStart={(e) => e.dataTransfer.setData('blockId', block.id)}>
      <p>{block.title}</p>
      <button onClick={() => setShowDetails(true)}>View Details</button>
      {showDetails && <BlockDetailsModal block={block} onClose={() => setShowDetails(false)} />}
      {showDataEntry && <DataEntryModal onSubmit={handleDataSubmit} onClose={() => setShowDataEntry(false)} />}
    </div>
  );
};

export default Block;
