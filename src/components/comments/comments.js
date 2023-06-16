import {useSelector} from "react-redux";
import classNames from 'classnames';
import './style.css'
import { Container, ListGroup } from "react-bootstrap";

const Comments = (close) => {
  const comments = useSelector(state => state.commentsReducer.comments)
  return (
    <Container>
      <div className={classNames({'comment-list': close.close === true })}>
        <ListGroup>
          {comments.map(comment =>
            <ListGroup.Item key={comment.id} className={`${comment.id}`}>
              <h2>{comment.email}</h2>
              <p>{comment.body}</p>
            </ListGroup.Item>
          )}
        </ListGroup>
      </div>
    </Container>
  )
}

export default Comments;