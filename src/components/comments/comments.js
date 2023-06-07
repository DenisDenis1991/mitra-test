import {useSelector} from "react-redux";
import classNames from 'classnames';
import './style.css'

const Comments = (close) => {

  const comments = useSelector(state => state.commentsReducer.comments)
  return (
    <div className={classNames('places__options ', 'places__options--custom', { 'places__options--opened': close.close === true })}>
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