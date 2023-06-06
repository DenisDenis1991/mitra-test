import {useDispatch, useSelector} from "react-redux";
import PostsList from "../../componients/posts-list/posts-list";
import { useState, useEffect } from "react";
import { fetchUsers } from "../../store/userReducer";
import Pagination from 'react-bootstrap/Pagination';
import AdvancedExample from "../../componients/pagination/pagination";
import { setCurrentPage } from "../../store/userReducer";
const MainPage = () => {

  const currentPage = useSelector(state => state.userReducer.currentPage);
  const totalCount = useSelector(state => state.userReducer.totalCount);
  const perPage = useSelector(state => state.userReducer.perPage);
  const pages = [1,2,3,4];

  const dispatch = useDispatch()
  const postsList = useSelector(state => state.userReducer.posts);

  const [inputText, setSearchTrext] = useState('');
  const [posts, setPostList] = useState(postsList);

  const filterPostList = (inputText, arr) => {
    if (!inputText) {
      return arr;
    }
    return arr.filter(({ title }) => title.toLowerCase().includes(inputText.toLowerCase()));
  }



  useEffect(() => {
    const Debounce = setTimeout(() => {
      const filteredPostList = filterPostList(inputText, postsList);
      setPostList(filteredPostList);
    }, 300);
    return () => clearTimeout(Debounce);
  }, [inputText, postsList]);

  useEffect(()=>{
    dispatch(fetchUsers())
}, [currentPage])

  return (
    <main>
      <div>
        <input
          value={inputText}
          autoFocus
          type="text"
          autoComplete="off"
          placeholder="Поиск по заголовку"
          onChange={(e) => setSearchTrext(e.target.value)}
          className="w-100 text-stone-900 placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 rounded-sm py-2 px-3 shadow-lg focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm mx-auto"
          srtyle={{width: '600px'}}
        />
      <button onClick={() => setSearchTrext('')}>Очистить</button> 
      </div>
      <button className="btn" onClick={() => dispatch(fetchUsers())}>ПОЛУЧИТЬ ЮЗЕРОВ--</button>
      <div>
        <PostsList posts={posts}/>
      </div>
      {/* <AdvancedExample /> */}
      <div className="pages">
                {pages.map((page, index) => <span
                    key={index}
                    className={currentPage == page ? "current-page" : "page"}
                    onClick={() => dispatch(setCurrentPage(page))}>{page}</span>)}
            </div>
    </main>  
  )
}

export default MainPage;
    // let unique = filterArr.reduce((acc, elem)=> acc.add(elem.userId), new Set())
    // const asd = Array.from(new Set(filterArr.map(item => item.userId)));.
    // https://jsonplaceholder.typicode.com/users?_start=0&_limit=5&_page=2