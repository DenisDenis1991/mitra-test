const PostComment = (post, postId) => {
  return (
  post.post.userId === postId.postId?
    <li>
      <h2 className="post-title">{post.post.title}</h2>
      <p className="post-description">{post.post.body}</p>

    </li>
    : null
  )
}

export default PostComment;