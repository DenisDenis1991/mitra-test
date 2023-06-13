import { useSelector } from "react-redux";
import Posts from "../../components/posts/posts";
import { fetchUsers, setCurrentPostPage } from "../../store/userReducer";
import { useDispatch } from "react-redux/es/exports";
import { useEffect } from "react";
import { LinkContainer } from 'react-router-bootstrap';
import NavItem from "react-bootstrap/esm/NavLink";
import { AppRoute } from "../../const";
import { Nav, ListGroup  } from "react-bootstrap";

const PostsPage = () => {
  const activeUser = localStorage.getItem('activeUser');
  const allPosts = useSelector(state => state.userReducer.posts);
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
        <LinkContainer to={AppRoute.Main}>
          <NavItem eventKey={1}>Home</NavItem>
        </LinkContainer>
      <ListGroup>
        {allUsers.map(user => 
          user.id === Number(activeUser) ?

          <ListGroup.Item key={activeUser}>
            <h2>{user.name}</h2>  
            {/* <div> */}
              <Nav.Link href={user.website}>{user.website}</Nav.Link>
            {/* </div>
            <div> */}
              <Nav.Link href={`asd:${user.phone}`}>{user.phone}</Nav.Link>
            {/* </div>
            <div> */}
              <Nav.Link href={`mailto:${user.email}`}>{user.email}</Nav.Link>
            {/* </div> */}
          </ListGroup.Item>
          : null
        )}
      </ListGroup>
      <Posts id={Number(activeUser)} filteredPostList={allPosts}/>
    </main>
  )
};

export default PostsPage;