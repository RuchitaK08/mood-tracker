import React, { useState } from 'react';

const ToDo = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const addTask = () => {
    if (input.trim() !== '') {
      setTasks([...tasks, { text: input, done: false }]);
      setInput('');
    }
  };

  const toggleDone = (index) => {
    const newTasks = [...tasks];
    newTasks[index].done = !newTasks[index].done;
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div style={wrapper}>
      <h1 style={title}>📋 To-Do List</h1>
      <div style={inputRow}>
        <input
          type="text"
          placeholder="Add new task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={inputBox}
        />
        <button onClick={addTask} style={addBtn}>➕</button>
      </div>
      <ul style={list}>
        {tasks.map((task, index) => (
          <li key={index} style={taskItem}>
            <span style={{ textDecoration: task.done ? 'line-through' : 'none', fontSize: '10px' }}>
              {task.text}
            </span>
            <div>
              <button onClick={() => toggleDone(index)} style={doneBtn}>✅</button>
              <button onClick={() => deleteTask(index)} style={deleteBtn}>❌</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDo;
const wrapper = {
  backgroundColor: '#fff0f5',
  height: '100vh',
  padding: '2rem',
  fontFamily: '"Press Start 2P", cursive',
};

const title = {
  textAlign: 'center',
  fontSize: '12px',
  color: '#ff3399',
  marginBottom: '20px',
};

const inputRow = {
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '20px',
};

const inputBox = {
  padding: '10px',
  fontFamily: '"Press Start 2P", cursive',
  fontSize: '10px',
  width: '60%',
  border: '2px solid #ff99cc',
  borderRadius: '6px',
};

const addBtn = {
  marginLeft: '10px',
  padding: '10px',
  fontSize: '12px',
  backgroundColor: '#ffd9ec',
  border: '2px solid #ff66cc',
  borderRadius: '6px',
  cursor: 'pointer',
};

const list = {
  listStyle: 'none',
  padding: 0,
};

const taskItem = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  margin: '10px 0',
  backgroundColor: '#ffe6f0',
  padding: '10px',
  borderRadius: '8px',
  fontSize: '10px',
};

const doneBtn = {
  marginRight: '5px',
  fontSize: '10px',
  cursor: 'pointer',
};

const deleteBtn = {
  fontSize: '10px',
  cursor: 'pointer',
};

