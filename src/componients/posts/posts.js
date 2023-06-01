import {useSelector} from "react-redux";

const Posts = (id) => {
  const posts = useSelector(state => state.userReducer.posts)
  return (
    <div className="posts">
      {posts.map(element =>

      element.userId === id.id? 
      <ul>
        <li key={element.id}>
          <h2>{element.title}</h2>
          <p>{element.body}</p>
        </li>
      </ul>
      : null
      )}
    </div>
  )
}

export default Posts;