import {useSelector} from "react-redux";
import classNames from 'classnames';
import './style.css'

const Comments = (open) => {

  const comments = useSelector(state => state.commentsReducer.comments)
  // const comId = useSelector(state => state.commentsReducer.commentId)
  return (
    <div className={classNames('places__options ', 'places__options--custom', { 'places__options--opened': open.open === true })}>
      {comments.map(comment =>
        <div key={comment.id} className={`${comment.id}`}>
          <h2>{comment.email}</h2>
          <p>{comment.body}</p>
        </div>
      )}
    </div>
  )
}

export default Comments;