import { Box } from '@mui/material'
import { useEffect } from 'react'

const volumeAPI = window.volumeAPI || false

const Example = () => {
  useEffect(() => {
    volumeAPI.getVolume().then((r) => {
      console.log('get volume number', r)
    })
  }, [])

  return (
    <Box>
      {/* <MediaStreamPage /> */}
      <DesktopStreamPage />
    </Box>
  )
}

export default Example
