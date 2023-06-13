import { useSelector } from "react-redux";
import Posts from "../../components/posts/posts";
import { fetchUsers, setCurrentPostPage } from "../../store/userReducer";
import { useDispatch } from "react-redux/es/exports";
import { useEffect } from "react";
import { LinkContainer } from 'react-router-bootstrap';
import {NavItem, Container, ListGroup} from "react-bootstrap";
import { AppRoute } from "../../const";
import "./post-link.css"
import LoadingScreen from "../../components/loading-screen/loading-screen";

const PostsPage = () => {
  const activeUser = localStorage.getItem('activeUser');
  const allPosts = useSelector(state => state.userReducer.posts);
  const isLoad = useSelector(state => state.userReducer.loading);
  const allUsers = useSelector(state => state.userReducer.users);
  const dispatch = useDispatch()

  useEffect(()=>{
    if (allUsers.length <= 0) {
      dispatch(setCurrentPostPage({currentPostPage:Number(activeUser), perPostPage: 1}))
      dispatch(fetchUsers())
    }
    return () => {
      dispatch(setCurrentPostPage({currentPostPage:1, perPostPage: 2}))
    }
 }, [])

  return (
    <main>
      {isLoad === true? <LoadingScreen /> :
      <>
        <Container>
          <LinkContainer 
            to={AppRoute.Main}
            className='post-link'
          >
            <NavItem>Назад</NavItem>
          </LinkContainer>
          {activeUser!==null?
          <ListGroup>
            {allUsers.map(user => 
              user.id === Number(activeUser) ?
              <ListGroup.Item key={activeUser}>
                <h2>{user.name}</h2>  
                <div>
                  <a href={user.website}>{user.website}</a>
                </div>
                <div>
                  <a href={`tel:${user.phone}`}>{user.phone}</a>
                </div>
                <div>
                  <a href={`mailto:${user.email}`}>{user.email}</a>
                </div>
              </ListGroup.Item>
              : null
            )}
          </ListGroup>
          :<p>Выберите автора</p>
          }

        </Container>
        <Posts id={Number(activeUser)} filteredPostList={allPosts}/>      
      </>
    }
    </main>
  )
};

export default PostsPage;