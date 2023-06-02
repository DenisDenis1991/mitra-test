import {useDispatch, useSelector} from "react-redux";
import Posts from "../../componients/posts/posts";
import { fetchUsers } from "../../store/userReducer";

const MainPage = () => {

  const dispatch = useDispatch()
  const users = useSelector(state => state.userReducer.users);

  return (
    <main>
      <button className="btn" onClick={() => dispatch(fetchUsers())}>ПОЛУЧИТЬ ЮЗЕРОВ--</button>
      <div className="users">
        {users.map(user =>

          <div key={user.id} className="user">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2a7.2 7.2 0 0 1-6-3.22c.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08a7.2 7.2 0 0 1-6 3.22z" fill="#000" fillOpacity=".4"/>
          </svg>
          <h1>{user.name}</h1>
            <Posts id={user.id}/>
          </div>

        )}
      </div>
    </main>  
  )
}

export default MainPage;