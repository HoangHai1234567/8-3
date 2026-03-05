import { useState, useEffect } from 'react'
import Confetti from 'react-confetti'

export default function ConfettiEffect() {
  const [show, setShow] = useState(true)
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  })

  useEffect(() => {
    const handleResize = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight })
    }
    window.addEventListener('resize', handleResize)

    const timer = setTimeout(() => setShow(false), 5000)

    return () => {
      window.removeEventListener('resize', handleResize)
      clearTimeout(timer)
    }
  }, [])

  if (!show) return null

  return (
    <Confetti
      width={dimensions.width}
      height={dimensions.height}
      numberOfPieces={150}
      recycle={false}
      colors={['#FFB6C1', '#FF69B4', '#FF1493', '#FFD700', '#FF91A4', '#FFC0CB']}
      gravity={0.15}
      style={{ position: 'fixed', top: 0, left: 0, zIndex: 40 }}
    />
  )
}
