import { useState, useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import { fetchComments } from "../../store/commentsReducer";
import Comments from "../comments/comments";

const Posts = (id) => {
  const posts = useSelector(state => state.userReducer.posts)
  const dispatch = useDispatch()

  const [state, setState] = useState(null);
  useEffect(() => {
    if (state !== null) {

      // dispatch(putId(state));
      dispatch(fetchComments(state));
    }
  }, [dispatch, state]);


  return (
  <>
  <div className="posts">
      {posts.map(element =>

      element.userId === id.id? 

      <ul key={element.id}>
        <li className={`${element.id}`} >
          <h2>{element.title}</h2>
          <p>{element.body}</p>
        </li>
        <li>
          <button key={element.id} className={`${element.id}`} onClick={() => setState(element.id)}>ПОЛУЧИТЬ Комментарии--</button>
        </li>
      </ul>
      : null
      )}
      
    </div>
    <Comments />
  </>
    

  )
}

export default Posts;