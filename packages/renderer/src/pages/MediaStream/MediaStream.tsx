import { FC, useEffect, useRef } from 'react'

const MediaStreamPage: FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  async function init() {
    const mediaDevices = navigator.mediaDevices
    const mediaStream = await mediaDevices.getUserMedia({
      video: true,
      audio: true,
    })
    videoRef.current!.srcObject = mediaStream
  }

  function getPicture() {
    const canvas = canvasRef.current!
    const videoElement = videoRef.current!
    canvas.width = 640
    canvas.height = 480
    canvas.getContext('2d')?.drawImage(videoElement, 0, 0, canvas.width, canvas.height)
  }

  useEffect(() => {
    init()
  }, [])

  return (
    <div className='w-100'>
      <video ref={videoRef} autoPlay className=' w-40 h-40' muted></video>
      <button onClick={getPicture}>拍照</button>
      <canvas ref={canvasRef}></canvas>
    </div>
  )
}

export default MediaStreamPage
