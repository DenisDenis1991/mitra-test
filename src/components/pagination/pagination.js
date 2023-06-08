import Pagination from 'react-bootstrap/Pagination';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentPage, fetchUsers } from '../../store/userReducer';
import { createPages } from '../../utils/utils';




const MainPagination = (countPage) => {
  const dispatch = useDispatch ();
  const currentPage = useSelector(state => state.userReducer.currentPage);
  const totalCount = useSelector(state => state.userReducer.totalCount);
  const users = useSelector(state => state.userReducer.users)
  const pages = [];
  createPages(pages, countPage.countPage, currentPage)

  return (
    <Pagination className="pages">
      {pages.map((page) => <Pagination.Item
        key={page}
        className={currentPage === page ? "current-page" : "page"}
        onClick={() => {dispatch(setCurrentPage(page))}}>{page}
      </Pagination.Item>)}
        
    </Pagination>
  );
}

let active = 2;
let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>,
  );
}

const PaginationBasic = () => {
  const currentPage = useSelector(state => state.userReducer.currentPage);
  const totalCount = useSelector(state => state.userReducer.totalCount);
  return (
    
    <div>
      <Pagination>{items}</Pagination>
      <br />

      <Pagination size="lg">{items}</Pagination>
      <br />

      <Pagination size="sm">{items}</Pagination>
    </div>
  );
}

// render(paginationBasic);

export default MainPagination;