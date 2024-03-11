import React from 'react';
import * as ReactDOM from "react-dom/client";
import { TaskProvider } from './context/TaskContext'; // Import the TaskProvider
import { ToastContainer } from 'react-toastify';
import { BrowserRouter } from 'react-router-dom';
import { AuthWrapper } from './context/AuthWrapper';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TaskProvider>
      <BrowserRouter>
        <AuthWrapper />
      </BrowserRouter> 
    </TaskProvider>
    <ToastContainer />
  </React.StrictMode>
);
