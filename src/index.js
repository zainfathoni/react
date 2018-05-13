import React from 'react'
import ReactDOM from 'react-dom'

class Greet extends React.Component {
  render() {
    return (
      <h1>
        Hello, {this.props.names[0] || 'Kisanak'}!
      </h1>
    )
  }
}

ReactDOM.render(
  <Greet names={['Pejuang', 'Kode', 'Indonesia']} />,
  document.getElementById('root')
)
