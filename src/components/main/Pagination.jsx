const Pagination = ({ currentPage, paginate, indexOfLastTask, filteredTasksLength }) => {
    return (
      <div className="pagination">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className={`pagination-button ${currentPage === 1 ? 'disabled' : ''}`}
        >
          Previous
        </button>
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={indexOfLastTask >= filteredTasksLength}
          className={`pagination-button ${indexOfLastTask >= filteredTasksLength ? 'disabled' : ''}`}
        >
          Next
        </button>
      </div>
    );
  };

  export default Pagination;