import React, { useState } from 'react';

const Task = ({ task, onUpdate, onDelete }) => {
  const [editMode, setEditMode] = useState(false);
  const [editedTask, setEditedTask] = useState(task);

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSave = () => {
    onUpdate(editedTask);
    setEditMode(false);
  };

  const handleDelete = () => {
    onDelete(task.id);
  };

  const handleChange = (e) => {
    setEditedTask({ ...editedTask, [e.target.name]: e.target.value });
  };

  return (
    <div className="task">
      {!editMode ? (
        <>
          <div className="task-info">
            <div className="description">{task.description}</div>
            <div className={`status ${task.status.toLowerCase()}`}>{task.status}</div>
          </div>
          <div className="task-actions">
            <button className="btn btn-outline-primary btn-sm mr-10" onClick={handleEdit}>Edit</button>
            <button className="btn btn-outline-danger btn-sm" onClick={handleDelete}>Delete</button>
          </div>
        </>
      ) : (
        <div className="edit-task">
          <input type="text" className="form-control" name="description" value={editedTask.description} onChange={handleChange} />
          <select className="form-control" name="status" value={editedTask.status} onChange={handleChange}>
            <option value="Not Started">Not Started</option>
            <option value="In Progress">In Progress</option>
            <option value="Finished">Finished</option>
          </select>
          <button className="btn btn-success btn-sm" onClick={handleSave}>Save</button>
        </div>
      )}
    </div>
  );
};

export default Task;
