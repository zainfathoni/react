import React from 'react'
import ReactDOM from 'react-dom'

const firstName = 'Pejuang'
const lastName = 'Kode'

ReactDOM.render(
  <h1>Hello, {firstName + ' ' + lastName}!</h1>,
  document.getElementById('root')
)
