import React from 'react'
import ReactDOM from 'react-dom'

function greet(name) {
  return <h1>Hello, {name || 'Kisanak'}!</h1>
}

ReactDOM.render(
  greet('Pejuang'),
  document.getElementById('root')
)
