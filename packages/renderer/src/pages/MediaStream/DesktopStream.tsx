import type { FC } from 'react'
import { useRef } from 'react'

const DesktopStreamPage: FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null)

  async function initStream() {
    const mediaDevices = navigator.mediaDevices
    const mediaStream = await mediaDevices.getDisplayMedia({
      video: true,
    })
    videoRef.current!.srcObject = mediaStream
  }

  return (
    <div className="w-100">
      <button onClick={initStream}>开始共享屏幕</button>
      <video ref={videoRef} autoPlay className=" w-40 h-40" muted></video>
    </div>
  )
}

export default DesktopStreamPage
