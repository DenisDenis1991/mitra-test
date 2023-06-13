import { useState, useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import { putId } from "../../store/commentsReducer";
import Comments from "../comments/comments";

import {Container, ListGroup} from "react-bootstrap";



const Posts = ({id, filteredPostList}) => {
  const commentId = useSelector(state => state.commentsReducer.commentId)
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

  console.log(state.elementId)
  return (
    <Container>
      <ListGroup className="posts">
        {filteredPostList.map(element =>
          element.userId === id? 
          <ListGroup.Item key={element.id} className={`${element.id}`} >
            <h2>{element.title}</h2>
            <p>{element.body}</p>
            <button id={element.id} type="button" key={element.id} className={`${element.id}`} onClick={(evt) => {setState({isClose: !state.isClose, elementId: evt.target.id})}}>Комментарии</button>
            {element.id === Number(commentId) ?
            <Comments close={state.isClose} />
            : null}
          </ListGroup.Item>
          : null
        )}

      </ListGroup>
    </Container>
  )
}

export default Posts;
