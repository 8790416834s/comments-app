import './index.css'

const CommentItem = props => {
  const {commentsList, likedIcon, deleteItem} = props
  const {id, name, comment} = commentsList

  const onDelete = () => {
    deleteItem(id)
  }

  const isLikeToggle = () => {
    likedIcon(id)
  }

  return (
    <li className="list-container">
      <div className="item-container">
        <div className="first-letter">
          <span className="letter">s</span>
        </div>
        <div>
          <p className="name-heading">{name}</p>
          <p className="comment-para">{comment}</p>
        </div>
      </div>
      <div className="buttons-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png"
          className="like-image"
          onClick={isLikeToggle}
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
          alt="delete"
          className="delete-btn"
          onClick={onDelete}
        />
      </div>
    </li>
  )
}

export default CommentItem
