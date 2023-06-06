import { useSelector } from "react-redux";
import Posts from "../posts/posts";



const PostsList = (posts) => {
  const allUsers = useSelector(state => state.userReducer.users);


  const userId = Array.from(new Set(posts.posts.map(item => item.userId)));

  const users = allUsers.filter(el => userId.includes(el.id))


  return(
    <ul className="users">
      {users.map(user =>
        <li key={user.id} className="user">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2a7.2 7.2 0 0 1-6-3.22c.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08a7.2 7.2 0 0 1-6 3.22z" fill="#000" fillOpacity=".4"/>
          </svg>
          <h1>{user.name}</h1>
          <Posts postsId ={posts} id={user.id} />
        </li>
      )}
    </ul>
);
}
export default PostsList;




