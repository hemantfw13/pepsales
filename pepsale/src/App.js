import React, { useState } from 'react';
import Swimlane from './components/Swimlane';
import Filter from './components/Filter';
import BlockCreator from './components/BlockCreator';
import { initialLanes, filterAttributes } from './utils/config';
import { mockBackend } from './services/mockBackend';

const App = () => {
  const [lanes, setLanes] = useState(initialLanes);
  const [filteredBlocks, setFilteredBlocks] = useState([]);

  const handleCreateBlock = (newBlock) => {
    const updatedLanes = lanes.map((lane) =>
      lane.id === 1 ? { ...lane, blocks: [...lane.blocks, newBlock] } : lane
    );
    setLanes(updatedLanes);
  };

  const handleFilter = (attributes) => {
    const filtered = mockBackend.filterBlocks(attributes);
    setFilteredBlocks(filtered);
  };

  return (
    <div>
      <h1>PepSales Assignment</h1>
      <BlockCreator onCreate={handleCreateBlock} />
      <Filter attributes={filterAttributes} onFilter={handleFilter} />
      {lanes.map((lane) => (
        <Swimlane key={lane.id} lane={lane} filteredBlocks={filteredBlocks} />
      ))}
    </div>
  );
};

export default App;
