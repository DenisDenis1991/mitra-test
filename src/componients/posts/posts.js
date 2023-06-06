import { useState, useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import { fetchComments, putId } from "../../store/commentsReducer";
import Comments from "../comments/comments";
import HeaderFinder from "../search/search";
import Search from "../search/search";

const Posts = ({id, postsId}) => {
  console.log('POSTS PROPS',id)
  const posts = useSelector(state => state.userReducer.posts)
  const comId = useSelector(state => state.commentsReducer.commentId)

  const dispatch = useDispatch()

  const [state, setState] = useState({
    isClose: true,
    elementId: id,
  })

  useEffect(() => {
    if (state.isClose === false) {
      dispatch(putId(state.elementId))
    }
  }, [dispatch, state, postsId]);

  return (
    <ul className="posts">
      {postsId.posts.map(element =>
        element.userId === id? 
        <li key={element.id} className={`${element.id}`} >
          <h2>{element.title}</h2>
          <p>{element.body}</p>
          <button id={element.id} type="button" key={element.id} className={`${element.id}`} onClick={() => {setState({isClose: !state.isClose, elementId: element.id})}}>Комментарии</button>
          {element.id === Number(comId) ?
          <Comments open={state.isClose} />
          : null}
        </li>
        
        : null
      )}

  </ul>
  )
}

export default Posts;


// dispatch(putId(evt.target.id)); setIsOpen(!isClose)}