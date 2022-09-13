import type { FC } from 'react'
import { useEffect, useRef } from 'react'

const MediaStreamPage: FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  let localMediaStream: MediaStream
  let localMediaRecorder: MediaRecorder
  let buffer: Blob[]

  async function initStream() {
    const mediaDevices = navigator.mediaDevices
    const mediaStream = await mediaDevices.getUserMedia({
      video: true,
      audio: true,
    })
    videoRef.current!.srcObject = mediaStream
    localMediaStream = mediaStream
  }

  function getPicture() {
    const canvas = canvasRef.current!
    const videoElement = videoRef.current!
    canvas.width = 640
    canvas.height = 480
    canvas.getContext('2d')?.drawImage(videoElement, 0, 0, canvas.width, canvas.height)
  }

  function startRecord() {
    buffer = []
    const options: MediaRecorderOptions = {
      mimeType: 'video/webm;codes=vp8',
    }
    if (!MediaRecorder.isTypeSupported(options.mimeType!)) {
      console.warn(`${options.mimeType} is not supported`)
      return
    }

    try {
      const mediaRecorder = new MediaRecorder(localMediaStream, options)
      localMediaRecorder = mediaRecorder
      mediaRecorder.ondataavailable = handleDataAvailable
      mediaRecorder.start(10)
    }
    catch (e) {
      console.error('Failed to create MediaRecorder', e)
    }
  }

  function handleDataAvailable(e: BlobEvent) {
    if (e?.data?.size > 0)
      buffer.push(e.data)
  }

  function stopRecord() {
    localMediaRecorder.stop()
  }

  function playRecordFile() {
    const recVideo = document.getElementById('recvideo') as HTMLVideoElement
    const blob = new Blob(buffer, { type: 'video/webm' })
    recVideo.src = URL.createObjectURL(blob)
    recVideo.srcObject = null
    recVideo.muted = true
    recVideo.play()
  }

  function downloadRecord() {
    const blob = new Blob(buffer, { type: 'video/webm' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.style.display = 'none'
    a.download = 'aaa.webm'
    a.click()
  }

  useEffect(() => {
    initStream()
  }, [])

  return (
    <div className="w-100">
      <video ref={videoRef} autoPlay className=" w-40 h-40" muted></video>
      <button onClick={getPicture}>拍照</button>
      <button onClick={startRecord}>开始录制</button>
      <button onClick={stopRecord}>停止录制</button>
      <button onClick={playRecordFile}>播放录制文件</button>
      <button onClick={downloadRecord}>下载</button>
      <canvas ref={canvasRef}></canvas>
      <video id="recvideo" style={{ width: 200, height: 200 }}></video>
    </div>
  )
}

export default MediaStreamPage
