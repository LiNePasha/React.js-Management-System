import Task from "./Task";

const RenderTasks = ({ tasks, editTask, deleteTask }) => {
    return (
      <>
        {tasks.length > 0 ? (
          <div className="row">
            {tasks.map((task) => (
              <div className="col-md-6 mb-2" key={task.id}>
                <Task task={task} onUpdate={(updatedTask) => editTask(task.id, updatedTask)} onDelete={() => deleteTask(task.id)} />
              </div>
            ))}
          </div>
        ) : (
          <span className="no-found">No tasks found - please add tasks to test the functiality.</span>
        )}
      </>
    );
  };

  export default RenderTasks;