import { useSelector } from "react-redux";
import Posts from "../../components/posts/posts";
import { fetchUsers } from "../../store/userReducer";
import { useDispatch } from "react-redux/es/exports";
import { useEffect } from "react";
import { LinkContainer } from 'react-router-bootstrap';
import NavItem from "react-bootstrap/esm/NavLink";
import { AppRoute } from "../../const";

const PostsPage = () => {
  const activeUser = localStorage.getItem('activeUser');
  const allUsers = useSelector(state => state.userReducer.users);
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetchUsers())
 }, [])

  return (
    <main>
        <LinkContainer to={AppRoute.Main}>
          <NavItem eventKey={1}>Home</NavItem>
        </LinkContainer>
      <ul>
        {allUsers.map(user => 
          user.id === Number(activeUser) ?

          <li key={activeUser}>
            <h2>{user.name}</h2>  
            <div>
              <a href={user.website}>{user.website}</a>
            </div>
            <div>
              <a href={`asd:${user.phone}`}>{user.phone}</a>
            </div>
            <div>
              <a href={`mailto:${user.email}`}>{user.email}</a>
            </div>
          </li>
          : null
        )}
      </ul>
      <Posts id={Number(activeUser)}/>
    </main>
  )
};

export default PostsPage;