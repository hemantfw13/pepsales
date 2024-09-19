import React from 'react';
import Block from './Block';
import { useDragDrop } from '../hook/useDragDrop';

const Swimlane = ({ lane, filteredBlocks }) => {
  const { handleDrop } = useDragDrop(lane);

  return (
    <div className="swimlane" onDrop={handleDrop} onDragOver={(e) => e.preventDefault()}>
      <h2>{lane.title}</h2>
      {filteredBlocks.length > 0
        ? filteredBlocks.map((block) => <Block key={block.id} block={block} />)
        : lane.blocks.map((block) => <Block key={block.id} block={block} />)}
    </div>
  );
};

export default Swimlane;
