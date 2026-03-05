import { useState, useEffect } from 'react'

export default function LoadingScreen({ onFinished }) {
  const [visible, setVisible] = useState(true)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true)
      setTimeout(() => {
        setVisible(false)
        onFinished?.()
      }, 800)
    }, 3000)
    return () => clearTimeout(timer)
  }, [onFinished])

  if (!visible) return null

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-pink-50 transition-opacity duration-800 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* Blooming flower animation */}
      <div className="relative w-32 h-32 mb-8">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute top-1/2 left-1/2 w-10 h-14 rounded-full bg-pink-300 opacity-80"
            style={{
              transform: `translate(-50%, -50%) rotate(${i * 45}deg) translateY(-20px)`,
              animation: `bloom 2s ease-out ${i * 0.1}s infinite`,
              background: `linear-gradient(135deg, #FFB6C1, #FF69B4)`,
            }}
          />
        ))}
        <div className="absolute top-1/2 left-1/2 w-8 h-8 rounded-full bg-gold -translate-x-1/2 -translate-y-1/2 z-10 animate-pulse" />
      </div>

      <p
        className="text-2xl md:text-3xl text-pink-400 animate-pulse"
        style={{ fontFamily: 'var(--font-heading)' }}
      >
        Loading...
      </p>

      <style>{`
        @keyframes bloom {
          0% { transform: translate(-50%, -50%) rotate(${0}deg) translateY(0) scale(0); opacity: 0; }
          50% { opacity: 0.8; }
          100% { transform: translate(-50%, -50%) rotate(var(--r)) translateY(-20px) scale(1); opacity: 0.8; }
        }
      `}</style>
    </div>
  )
}
