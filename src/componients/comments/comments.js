import {useSelector} from "react-redux";

const Comments = () => {
  // const comments = useSelector(state => state.commentsReducer.comments)
  const comId = useSelector(state => state.commentsReducer.commentId)
  console.log(comId)
  // return (
  //   <div>
  //     {comments.map(comment =>
  //       comment.postId === comId?
  //       <div key={comment.id} className={`${comment.postId}`}>
  //         <h2>{comment.email}</h2>
  //         <p>{comment.body}</p>
  //       </div>
  //       : null
  //     )}
  //   </div>
  // )
}

export default Comments;