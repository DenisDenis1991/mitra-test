import {useDispatch, useSelector} from "react-redux";
import PostsList from "../../components/posts-list/posts-list";
import { useState, useEffect } from "react";
import { fetchUsers } from "../../store/userReducer";
import MainPagination from "../../components/pagination/pagination";
import {Form, InputGroup, Button, Container} from 'react-bootstrap';
import LoadingScreen from "../../components/loading-screen/loading-screen";

const filterPostList = (inputText, arr) => {
  if (!inputText) {
    return arr;
  }
  return arr.filter(({ title }) => title.toLowerCase().includes(inputText.toLowerCase()));
}

const MainPage = () => {
  const dispatch = useDispatch()
  const postsList = useSelector(state => state.userReducer.posts);
  const isLoad = useSelector(state => state.userReducer.loading);
  const fetchError = useSelector(state => state.userReducer.error);
  console.log(postsList.length)

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
  
  useEffect(() => {
    if(postsList.length >= 0) {
      dispatch(fetchUsers())
    }
  }, [])

  return (
    
    <main>
      {fetchError ? 
        <div className="alert alert-danger" role="alert">
          Произошла ошибка! ПОжалуйста обновите страницу!
        </div> :
        isLoad === true? <LoadingScreen /> :
        <>
          <Container>
            <div style={{display: 'flex',flexDirection: 'column', alignItems: 'center', marginBottom: '20px'}}>
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
            </div>
          </Container>
            <MainPagination countPage={countPage} />
          <div>
            <PostsList posts={posts}/>
          </div>
        </>
      }
    </main>
  )
}

export default MainPage;
