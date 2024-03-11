const TaskControls = ({ sortOrder, handleSortByStatus, handleFilter }) => {
    return (
      <div className="controls mb-2">
        <div className="select-container">
          <label htmlFor="sortBy">Sort By:</label>
          <div className="custom-select">
            <select id="sortBy" onChange={handleSortByStatus}>
              <option value="">None</option>
              <option value="status">Status</option>
            </select>
            <div className="select-arrow"></div>
          </div>
        </div>
        <div className="select-container">
          <label htmlFor="filterBy">Filter By Status:</label>
          <div className="custom-select">
            <select id="filterBy" onChange={(e) => handleFilter(e.target.value)}>
              <option value="">All</option>
              <option value="Not Started">Not Started</option>
              <option value="In Progress">In Progress</option>
              <option value="Finished">Finished</option>
            </select>
            <div className="select-arrow"></div>
          </div>
        </div>
      </div>
    );
  };

  export default TaskControls;