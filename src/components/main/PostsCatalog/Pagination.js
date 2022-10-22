
const Pagination = ({totalPosts, postsPerPage, changeCurrentPage}) => {
    let pages = [];

    for(let i = 1; i <= Math.ceil(totalPosts/postsPerPage); i++) {
        pages.push(i)
    }

    return (
        <div className="pagination__buttons">{
            pages.map((page, index) => {
                
                return <button className="pagination-btn" key={index} onClick={() => changeCurrentPage(page)}>{page}</button>
            })
            }</div>
    )
}

export default Pagination;