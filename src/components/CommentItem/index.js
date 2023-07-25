import './index.css'

const CommentItem = props => {
  const {commentsList, likedIcon, deleteItem} = props
  const {id, firstLetter, name, isLikeToggle, comment} = commentsList

  const starImg = isLikeToggle
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'

  const onDelete = () => {
    deleteItem(id)
  }

  const isLike = () => {
    likedIcon(id)
  }

  return (
    <li className="list-container">
      <div className="item-container">
        <div className="first-letter">
          <span className="letter">{firstLetter}</span>
        </div>
        <div>
          <p className="name-heading">{name}</p>
          <p className="comment-para">{comment}</p>
        </div>
      </div>
      <div className="buttons-container">
        <button type="button" className="button" onClick={isLike}>
          <img src={starImg} className="like-image" />
        </button>
        <button type="button" className="button" onClick={onDelete}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
            className="delete-btn"
          />
        </button>
      </div>
    </li>
  )
}

export default CommentItem
