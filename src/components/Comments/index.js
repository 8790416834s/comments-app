import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import {hr} from 'date-fns/locale'
import CommentItem from '../CommentItem'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

const initialCommentsList = [
  {id: uuidv4(), firstLetter: '', name: '', comment: '', isLikeToggle: false},
]

// Write your code here
class Comments extends Component {
  state = {
    commentsList: initialCommentsList,
    firstLetter: '',
    name: '',
    comment: '',
    isLikeToggle: false,
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  onChangeComment = event => {
    this.setState({comment: event.target.value})
  }

  onAddComment = () => {
    const {firstLetter, name, comment, isLikeToggle, commentsList} = this.state
    this.setState({firstLetter: name[0]})
    const newComment = {
      id: uuidv4(),
      firstLetter,
      name,
      comment,
      isLikeToggle,
    }
    const updatedComment = [...commentsList, newComment]
    this.setState({commentsList: updatedComment})
  }

  deleteItem = id => {
    const {commentsList} = this.state
    const filteredList = commentsList.filter(each => each.id === id)
    this.setState({
      commentsList: filteredList,
    })
  }

  likedIcon = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(each => {
        if (each.id === id) {
          return {...each, isLikeToggle: !each.isLikeToggle}
        }
        return each
      }),
    }))
  }

  render() {
    const {commentsList} = this.state

    return (
      <div className="app-container">
        <div className="details-container">
          <div className="input-container">
            <form className="form-container" onSubmit={this.onAddComment}>
              <h1 className="title">Comments</h1>
              <p className="para">Say something about 4.0 Technologies</p>
              <input
                type="text"
                placeholder="Your Name"
                className="input-name"
                onChange={this.onChangeName}
              />
              <textarea
                type="text"
                placeholder="Your Comment"
                className="input-comment"
                onChange={this.onChangeComment}
              />
              <button type="submit" className="add-button">
                Add Comment
              </button>
            </form>
          </div>

          <div className="image-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
              className="image"
            />
          </div>
        </div>
        <hr />
        <div className="count-container">
          <div>
            <button type="button" className="count">
              0
            </button>
          </div>
          <p>Comments</p>
        </div>
        <ul>
          {commentsList.map(each => (
            <CommentItem
              key={each.id}
              commentsList={each}
              deleteItem={this.deleteItem}
              likedIcon={this.likedIcon}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments
