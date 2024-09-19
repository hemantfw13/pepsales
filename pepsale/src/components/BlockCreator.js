import React, { useState } from 'react';

const BlockCreator = ({ onCreate }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = () => {
    if (title) {
      const newBlock = {
        id: Date.now().toString(), 
        title,
        history: ['Created'],
      };
      onCreate(newBlock);
      setTitle(''); 
    }
  };

  return (
    <div>
      <h3>Create New To-Do</h3>
      <input
        type="text"
        placeholder="Block Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={handleSubmit}>Add To-Do</button>
    </div>
  );
};

export default BlockCreator;
