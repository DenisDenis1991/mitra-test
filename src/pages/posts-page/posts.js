import { useSelector } from "react-redux";

const PostsPage = () => {
  const activeUser = useSelector(state => state.userReducer.activeUser);
  const allUsers = useSelector(state => state.userReducer.users);

  return (
    <ul>
      {allUsers.map(user => 
        user.id === Number(activeUser) ?

        <li>
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
    
  )
  
};

export default PostsPage;