/* eslint-disable no-unused-vars */
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Posts from "../posts/posts";
import { AppRoute } from "../../const";
import { useState } from "react";
import { useDispatch } from "react-redux/es/exports";
import { activeUser } from "../../store/userReducer";


const PostsList = (posts) => {

  const allUsers = useSelector(state => state.userReducer.users);
  const userId = Array.from(new Set(posts.posts.map(item => item.userId)));
  const users = allUsers.filter(el => userId.includes(el.id))
  const dispatch = useDispatch()

  return(
    <ul className="users">
      {users.map(user =>
        <li key={user.id} className="user">
          <Link id={user.id} to={AppRoute.Posts} onClick={(evt) => {/*dispatch(activeUser(evt.currentTarget.id));*/ localStorage.setItem('activeUser', evt.currentTarget.id )}}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2a7.2 7.2 0 0 1-6-3.22c.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08a7.2 7.2 0 0 1-6 3.22z" fill="#000" fillOpacity=".4"/>
            </svg>
            <h1>{user.name}</h1>
          </Link>  
          <Posts id={user.id} />
        </li>
      )}
    </ul>
);
}
export default PostsList;




