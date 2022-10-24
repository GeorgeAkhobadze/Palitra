const Pagination = ({
  totalPosts,
  postsPerPage,
  changeCurrentPage,
  currentPage,
}) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }

  return (
    <div className="pagination__buttons">
      {pages.map((page, index) => {
        console.log(page, currentPage);
        return (
          <button
            className={`pagination-btn ${
              currentPage == page ? "active-page" : ""
            }`}
            key={index}
            onClick={() => changeCurrentPage(page)}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
