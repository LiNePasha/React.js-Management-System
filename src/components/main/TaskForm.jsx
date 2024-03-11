import React, { useState } from 'react';
import { useTaskContext } from '../../context/TaskContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TaskForm = () => {
  const { addTask } = useTaskContext(); // Access addTask function from TaskContext
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description || !status) {
      toast.error('Please choose a task description & status.');
      return;
    }
    const newTask = {
      id: Date.now(),
      description,
      status
    };
    addTask(newTask);
    setDescription('');
    setStatus('');
    toast.success('Task added successfully');
  };

  return (
    <form className="task-form justify-content-center row mb-2" onSubmit={handleSubmit}>
      <h2 className='text-center'>Add Tasks</h2>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Task description"
        className="task-input col-lg-3"
      />
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="task-select col-lg-3"
      >
        <option value="">Select status</option>
        <option value="Not Started">Not Started</option>
        <option value="In Progress">In Progress</option>
        <option value="Finished">Finished</option>
      </select>
      <button type="submit" className="task-button col-lg-3">Add Task</button>
    </form>
  );
};

export default TaskForm;
