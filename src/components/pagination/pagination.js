import Pagination from 'react-bootstrap/Pagination';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentPage } from '../../store/userReducer';
import { createPages } from '../../utils/utils';

const MainPagination = (countPage) => {
  const dispatch = useDispatch ();
  const currentPage = useSelector(state => state.userReducer.currentPage);
  const pages = [];
  createPages(pages, countPage.countPage, currentPage)

  return (
    <Pagination 
      className="pages"
      style={{justifyContent: 'center'}}
      >
      {pages.map((page, index) => <Pagination.Item
        key={page}
        className={currentPage === page ? "current-page" : "page"}
        onClick={() => {dispatch(setCurrentPage({currentPage: page, indexCurrentPage: index}))}}>{page}
      </Pagination.Item>)}
    </Pagination>
  );
}

export default MainPagination;
