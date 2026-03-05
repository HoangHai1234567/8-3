import { useState, useRef } from 'react'

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef(null)

  const toggleMusic = () => {
    if (!audioRef.current) {
      // Create audio element on first interaction
      audioRef.current = new Audio()
      // Place your mp3 file in src/assets/music/ and import it,
      // or use a direct URL. For now we use a placeholder.
      audioRef.current.loop = true
      audioRef.current.volume = 0.3
    }

    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play().catch(() => {
        // Browser blocked autoplay, user needs to interact first
      })
    }
    setIsPlaying(!isPlaying)
  }

  return (
    <button
      onClick={toggleMusic}
      className="fixed top-4 right-4 z-30 w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm border-2 border-pink-300 flex items-center justify-center shadow-lg hover:shadow-pink-200/50 hover:scale-110 transition-all duration-300 cursor-pointer"
      title={isPlaying ? 'Tắt nhạc' : 'Bật nhạc'}
    >
      <span className={`text-xl ${isPlaying ? 'animate-spin' : ''}`} style={{ animationDuration: '3s' }}>
        {isPlaying ? '🎵' : '🔇'}
      </span>
    </button>
  )
}
