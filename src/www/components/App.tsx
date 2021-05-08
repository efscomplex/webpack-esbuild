import { useInjection } from 'www/providers/InjectionsProvider'
import React, { useState } from 'react'
import createMarkup from 'www/helpers/createMarkup'

const App = () => {
  const [video, setVideo] = useState('')
  const dao = useInjection('DAO')

  const getVideos = () => {
    const params = { id: 'ILS4yYrxY6s', part: 'player' }
    dao
      .query('videos', params)
      .then(({ items }: any) => {
        const html = items[0].player.embedHtml
        setVideo(html)
      })
      .catch((err: Error) => {
        throw err
      })
  }
  React.useEffect(() => {
    getVideos()
  }, [])

  return (
    <div>
      <h1>Video Repositories</h1>
      <div dangerouslySetInnerHTML={createMarkup(video)} />
    </div>
  )
}

export default App
