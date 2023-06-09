import {useDispatch, useSelector} from "react-redux";
import PostsList from "../../components/posts-list/posts-list";
import { useState, useEffect } from "react";
import { fetchUsers } from "../../store/userReducer";
import { setCurrentPage } from "../../store/userReducer";
import { createPages } from "../../utils/utils";
import MainPagination from "../../components/pagination/pagination";
import {Form, InputGroup, Button} from 'react-bootstrap';





const filterPostList = (inputText, arr) => {
  if (!inputText) {
    return arr;
  }
  return arr.filter(({ title }) => title.toLowerCase().includes(inputText.toLowerCase()));
}

const MainPage = () => {

  const dispatch = useDispatch()
  const postsList = useSelector(state => state.userReducer.posts);
  const users = useSelector(state => state.userReducer.users);


  const [inputText, setSearchTrext] = useState('');
  const [posts, setPostList] = useState(postsList);
  
  const countPage = Math.ceil((new Set(posts.map(item => item.userId))).size/2);
  useEffect(() => {

    const Debounce = setTimeout(() => {
      const filteredPostList = filterPostList(inputText, postsList);
      setPostList(filteredPostList);
    }, 0);
    return () => clearTimeout(Debounce);
  }, [inputText, postsList]);
  

  return (
    <main>
      <div>
        <InputGroup className="mb-3">
          <Form.Control
            value={inputText}
            autoFocus
            type="text"
            autoComplete="off"
            placeholder="Поиск по заголовку"
            onChange={(e) => setSearchTrext(e.target.value)}
          />
          <Button 
            variant="outline-secondary" 
            id="button-addon2"
            onClick={() => setSearchTrext('')}
            > Очистить
          </Button>
        </InputGroup>
        <Button 
          variant="primary" 
          size="lg"
          onClick={() => dispatch(fetchUsers())}
          style={{width: '100%'}}
          >
          Получить список авторов
        </Button>  
      </div>
        <MainPagination countPage={countPage} />
      <div>
        <PostsList posts={posts}/>
      </div>


      
    </main>  
  )
}

export default MainPage;
    // let unique = filterArr.reduce((acc, elem)=> acc.add(elem.userId), new Set())
    // const asd = Array.from(new Set(filterArr.map(item => item.userId)));.
    // https://jsonplaceholder.typicode.com/users?_start=0&_limit=5&_page=2