import React from 'react'
import ReactDOM from 'react-dom'

function Greet(props) {
  return <h1>Hello, {props.name || 'Kisanak'}!</h1>
}

ReactDOM.render(
  <Greet name='Pejuang' />,
  document.getElementById('root')
)
