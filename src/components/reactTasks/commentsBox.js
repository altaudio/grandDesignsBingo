import React from 'react'
import _ from 'lodash'

class CommentsBox extends React.Component {

  constructor() {
    super()

    // Declare comments array and current comment and name
    this.state = { comments: [
      { name: 'Dan Ellin', comment: 'This game is totes amazeballs' },
      { name: 'Gordon Miller', comment: 'I love grand designs me' },
      { name: 'Dan Ellin', comment: 'Gordon what is ur fave epsiode?' },
      { name: 'h8GrndDesgns', comment: 'Kevin is a idiot' }
    ],
      comment: '',
      name: '' }
  }

  // When comment input field changes set comment in state
  commentChange(input) {
    this.setState({ comment: input.target.value })
  }

  // When name input changes set name in state
  nameChange(input) {
    this.setState({ name: input.target.value })
  }

  // When add comment button clicked add current name and comment to comments state, and clear both input fields
  addComment() {
    this.setState({ comments:
    [{ name: this.state.name, comment: this.state.comment },
      ...this.state.comments]
    })

    this.setState({ comment: '', name: '' })
  }

  render() {
    return (
      <div>
        <h3>Comments</h3>

        <ul>
          {_.map(this.state.comments, (comment) => {
            return <li>{`${comment.name} commented: ${comment.comment}`}</li>
          })}
        </ul>

        <h3>Add Comment</h3>
        <p>Name:</p>
        <input value={this.state.name} onChange={(value) => this.nameChange(value)} />

        <p>Comment:</p>
        <input value={this.state.comment} onChange={(value) => this.commentChange(value)} />

        <button onClick={(value) => this.addComment(value)}>Add Comment</button>

      </div>
    )
  }

}

export default CommentsBox

