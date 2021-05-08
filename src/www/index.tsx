import React from 'react'
import { render } from 'react-dom'
import App from 'www/components/App'

import './styles/index.css'

import { InjectionsProvider } from 'www/providers/InjectionsProvider'
import { Fetcher } from 'controllers/Fetcher'
import { Ajax } from 'controllers/Ajax'

const key = process.env.YOUTUBE_API_KEY as string
const URL = process.env.YOUTUBE_BASE_URL as string

const dependencies = {
  //DAO: new Fetcher(URL, { key }),
  DAO: new Ajax(URL, { key }),
}

const jsxApp = (
  <InjectionsProvider dependencies={dependencies}>
    <App />
  </InjectionsProvider>
)

render(jsxApp, document.getElementById('app'))
