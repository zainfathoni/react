import React from 'react'
import ReactDOM from 'react-dom'

class Greet extends React.Component {
  render() {
    return (
      <h1>
        Hello, {this.props.name || 'Kisanak'}!
      </h1>
    )
  }
}

ReactDOM.render(
  <Greet name='Pejuang' />,
  document.getElementById('root')
)
