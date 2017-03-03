import React from 'react'

class CommentsBox extends React.Component {
	
	constructor () {
		super()
		this.state = {comments: {name : 'Dan Ellin', comment : 'This game is totes amazeballs'}}
	}

	render () {
		return (
			<div>
			  <p>Add Comment</p>
			</div>
			)
	}

} 

export default CommentsBox

