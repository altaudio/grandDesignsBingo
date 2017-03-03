import React from 'react'

class CommentsBox extends React.Component {

  constructor() {
    super()
    this.state = { comments: [{ name: 'Dan Ellin', comment: 'This game is totes amazeballs' }] }
  }

  render() {
    return (
      <div>
        <p>Comments</p>

        <p>Add Comment</p>
        <p>Name:</p>
        <input />

        <p>Comment:</p>
        <input onChange={(value) => handleCommentChange(value)} />

        <button onClick={() => handleClick()}>Add Comment</button>

      </div>
    )
  }

}

export default CommentsBox

