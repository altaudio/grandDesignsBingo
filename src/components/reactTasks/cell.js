import React from 'react'


class Cell extends React.Component {

  constructor() {
    super()
    this.state = { pressed: true, colour: 'black', fontColour: 'white' }
  }

  handleClick() {
    this.setState({ pressed: !this.state.pressed })

    if (this.state.pressed) {
      this.setState({ colour: '#b3ffb3' })
      this.setState({ fontColour: 'black' })
    } else {
      this.setState({ colour: 'black' })
      this.setState({ fontColour: 'white' })
    }
  }

  render() {
    return (
      <button
        style={{
          height: '150',
          width: '150',
          backgroundColor: this.state.colour,
          marginTop: '50',
          marginLeft: '50',
          float: 'left' }}

        onClick={() => this.handleClick()}
      >

        <p
          style={{
            color: this.state.fontColour,
            fontSize: 12,
            textAlign: 'center',
            marginTop: 'auto',
            marginBottom: 'auto'
          }}
        >{this.props.text}</p>
      </button>
    )
  }
}

export default Cell
