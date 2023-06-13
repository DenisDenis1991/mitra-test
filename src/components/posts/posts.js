import { useState, useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import { putId } from "../../store/commentsReducer";
import Comments from "../comments/comments";



const Posts = ({id, filteredPostList}) => {

  const postsId = useSelector(state => state.userReducer.posts)

  const comId = useSelector(state => state.commentsReducer.commentId)

  const dispatch = useDispatch()
 
  const [state, setState] = useState({
    isClose: true,
    elementId: null,
  })

  useEffect(() => {
    if (state.isClose === false) {
      dispatch(putId(state.elementId))
    }
  }, [state]);

  return (
    <ul className="posts">
      {filteredPostList.map(element =>
        element.userId === id? 
        <li key={element.id} className={`${element.id}`} >
          <h2>{element.title}</h2>
          <p>{element.body}</p>
          <button id={element.id} type="button" key={element.id} className={`${element.id}`} onClick={(evt) => {setState({isClose: !state.isClose, elementId: evt.target.id})}}>Комментарии</button>
          {element.id === Number(comId) ?
          <Comments close={state.isClose} />
          : null}
        </li>
        
        : null
      )}

  </ul>
  )
}

export default Posts;
