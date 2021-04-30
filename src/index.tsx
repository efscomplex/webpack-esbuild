import React from 'react'
import { render } from 'react-dom'

import 'styles/index.css'
const API_KEY = process.env.GOOGLE_API_KEY
console.log(API_KEY)

const App = () => <h1>'hello world!'</h1>
render(<App />, document.getElementById('app'))
