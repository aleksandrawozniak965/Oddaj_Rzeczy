import PropTypes from 'prop-types';

export default function Pagination ({totalPosts, postsPerPage, setCurrentPage}) {
    let pages = [];

    for (let i = 1; i <= Math.ceil(totalPosts/postsPerPage); i++ ) {
        pages.push(i)
    }

    return (
        <div>{pages.map((page, index) => {
            return <button className="btn_pagination" key={index} onClick={() => setCurrentPage(page)}>{page}</button>
        })}</div>
    )
}

Pagination.propTypes = {
    totalPosts: PropTypes.number.isRequired,
    postsPerPage: PropTypes.number.isRequired,
    setCurrentPage: PropTypes.func.isRequired
};