import { useInjection } from 'www/providers/InjectionsProvider'
import React, { useState } from 'react'
import createMarkup from 'www/helpers/createMarkup'
import { Video } from 'controllers/Video'

const App = () => {
  const [video, setVideo] = useState('')
  const dao = useInjection('DAO')

  React.useEffect(() => {
    const video = new Video('ILS4yYrxY6s', dao)
    video.getData().then(setVideo)
  }, [])

  return (
    <div>
      <h1>Video Repositories</h1>
      <div dangerouslySetInnerHTML={createMarkup(video)} />
    </div>
  )
}

export default App
