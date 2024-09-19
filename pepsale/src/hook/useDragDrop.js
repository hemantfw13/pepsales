export const useDragDrop = (lane) => {
    const handleDrop = (e) => {
      const blockId = e.dataTransfer.getData('blockId');
      console.log(`Block ${blockId} moved to ${lane.title}`);
    };
  
    return { handleDrop };
  };
  