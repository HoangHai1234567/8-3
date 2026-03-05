import { useEffect, useRef } from 'react'

export default function Header() {
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)

  useEffect(() => {
    const title = titleRef.current
    const subtitle = subtitleRef.current
    if (title) {
      title.style.opacity = '0'
      title.style.transform = 'scale(0.8)'
      setTimeout(() => {
        title.style.transition = 'opacity 1s ease-out, transform 1s ease-out'
        title.style.opacity = '1'
        title.style.transform = 'scale(1)'
      }, 200)
    }
    if (subtitle) {
      subtitle.style.opacity = '0'
      setTimeout(() => {
        subtitle.style.transition = 'opacity 1.2s ease-out'
        subtitle.style.opacity = '1'
      }, 800)
    }
  }, [])

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 relative">
      <div className="mb-6">
        <span className="text-5xl md:text-7xl block mb-4">🌸</span>
      </div>

      <h1
        ref={titleRef}
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-pink-500 mb-6 leading-tight"
        style={{ fontFamily: 'var(--font-heading)' }}
      >
        Chúc Mừng Ngày
        <br />
        Quốc Tế Phụ Nữ
        <br />
        <span className="text-gold text-5xl sm:text-6xl md:text-7xl lg:text-8xl">8/3</span>
      </h1>

      <p
        ref={subtitleRef}
        className="text-lg sm:text-xl md:text-2xl text-pink-400 max-w-2xl leading-relaxed"
        style={{ fontFamily: 'var(--font-body)' }}
      >
        Gửi tặng những bông hoa đẹp nhất đến các đồng nghiệp nữ thân yêu
        <br />
        Chúc các chị em luôn tươi trẻ, hạnh phúc và thành công!
      </p>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-pink-300 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-pink-300 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}
