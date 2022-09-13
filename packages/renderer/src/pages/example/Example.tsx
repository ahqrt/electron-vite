import { Box } from '@mui/material'
import { useEffect } from 'react'

const volumeAPI = window.volumeAPI || false

const Example = () => {
  useEffect(() => {
    volumeAPI.getVolume().then((r) => {
      // eslint-disable-next-line no-console
      console.log('get volume number', r)
    })
  }, [])

  return (
    <Box>
    </Box>
  )
}

export default Example
