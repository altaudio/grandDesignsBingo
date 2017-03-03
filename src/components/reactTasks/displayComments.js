import React from 'react'
import _ from 'lodash'

class DisplayComments extends React.Component {

  // Render a list of the amount of comments passed in commmentsMax prop
  render() {
    return (
      <ul>
        {_.map(this.props.comments, (comment, index) => {
          if (index < this.props.commentsMax) {
            return <li>{`${comment.name} commented: ${comment.comment}`}</li>
          }
          return null
        })}
      </ul>
    )
  }
}

export default DisplayComments
