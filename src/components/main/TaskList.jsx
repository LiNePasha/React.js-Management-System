import React, { useEffect } from 'react';
import TaskForm from './TaskForm';
import { useTaskContext } from '../../context/TaskContext';
import Pagination from './Pagination';
import TaskControls from './TaskControls';
import RenderTasks from './RenderTasks';
import { toast } from 'react-toastify';
import './main.css';

const TaskList = () => {
  const {
    tasks,
    setTasks,
    sortOrder,
    setSortOrder,
    filterStatus,
    setFilterStatus,
    currentPage,
    setCurrentPage,
    tasksPerPage,
  } = useTaskContext();

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, [setTasks]);

  const handleSortByStatus = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    const sortedTasks = sortTasks(tasks);
    setTasks(sortedTasks);
  };

  const handleFilter = (status) => {
    setFilterStatus(status);
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Editing Task
  const editTask = (taskId, updatedTask) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, ...updatedTask };
      }
      return task;
    });
    const sortedTasks = sortTasks(updatedTasks);
    toast.success(`Task ${taskId} Editing successfully`);
    setTasks(sortedTasks);
  };

  // Deleting Task
  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    const sortedTasks = sortTasks(updatedTasks);
    toast.success(`Task ${taskId} Deleting successfully`);
    setTasks(sortedTasks);
  };

  const sortTasks = (tasksArray) => {
    const sortedTasks = tasksArray.sort((a, b) => {
      if (a.status < b.status) return sortOrder === 'asc' ? -1 : 1;
      if (a.status > b.status) return sortOrder === 'asc' ? 1 : -1;
      return 0;
    });
    return sortedTasks;
  };

  const filteredTasks = filterStatus
    ? tasks.filter((task) => task.status.toLowerCase() === filterStatus.toLowerCase())
    : tasks;

  const indexOfLastTask = currentPage * tasksPerPage;
  const indexOfFirstTask = indexOfLastTask - tasksPerPage;
  const currentTasks = filteredTasks.slice(indexOfFirstTask, indexOfLastTask);

  return (
    <main className="main">
      <TaskForm />
      <TaskControls
        sortOrder={sortOrder}
        handleSortByStatus={handleSortByStatus}
        handleFilter={handleFilter}
      />
      <RenderTasks tasks={currentTasks} editTask={editTask} deleteTask={deleteTask} />
      <Pagination
        currentPage={currentPage}
        paginate={paginate}
        indexOfLastTask={indexOfLastTask}
        filteredTasksLength={filteredTasks.length}
      />
    </main>
  );
};

export default TaskList;