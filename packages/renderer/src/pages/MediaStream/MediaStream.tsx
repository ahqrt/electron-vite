import { FC, useEffect, useRef } from "react"

const MediaStreamPage: FC = () => {

  const videoRef = useRef<HTMLVideoElement>(null)


  async function init() {
    const mediaDevices = navigator.mediaDevices

    const mediaStream = await mediaDevices.getUserMedia({
      video: true,
      audio: true
    })

    console.log('mediaStream', mediaStream);

    const videoTracks = mediaStream.getVideoTracks()
    console.log('videoTrack', videoTracks);

    videoRef.current!.srcObject = mediaStream
    console.log('videoRef.current!.srcObject', videoRef.current!.srcObject);

  }

  useEffect(() => {
    init()
  }, [])


  return (
    <div className="w-100">
      <video ref={videoRef} className=" w-20 h-20 border-gray-300" muted></video>
    </div>
  )
}

export default MediaStreamPage