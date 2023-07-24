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
  {id: uuidv4(), firstLetter: '', name: '', isLikeToggle: false, comment: ''},
]

// Write your code here
class Comments extends Component {
  state = {
    firstLetter: '',
    name: '',
    comment: '',
    isLikeToggle: false,
    commentsList: initialCommentsList,
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  onChangeComment = event => {
    this.setState({comment: event.target.value})
  }

  onAddComment = () => {
    const {firstLetter, name, comment, commentsList} = this.state
    this.setState({firstLetter: name[0]})
    const newComment = {
      id: uuidv4(),
      firstLetter,
      name,
      comment,
    }
    const updatedComment = [...commentsList, newComment]
    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, updatedComment],
    }))
  }

  deleteItem = id => {
    const {commentsList} = this.state
    const filteredList = commentsList.filter(each => each.id === id)
    this.setState({commentsList: filteredList})
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
            <h1 className="title">Comments</h1>
            <p className="para">Say something about 4.0 Technologies</p>
            <form className="form-container" onSubmit="onAddComment">
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
              <button
                type="button"
                className="add-button"
                onClick={this.onAddComment}
              >
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
        <hr className="separator" />
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
