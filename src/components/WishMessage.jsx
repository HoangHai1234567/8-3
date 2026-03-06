import { useEffect, useRef } from 'react'
import wishes from '../data/wishes'
import ScrollReveal from './ScrollReveal'

function WishCard({ wish, index }) {
  const cardRef = useRef(null)

  useEffect(() => {
    const el = cardRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out'
            el.style.opacity = '1'
            el.style.transform = 'translateY(0)'
          }, index * 150)
          observer.unobserve(el)
        }
      },
      { threshold: 0.1 }
    )

    el.style.opacity = '0'
    el.style.transform = 'translateY(30px)'

    observer.observe(el)
    return () => observer.disconnect()
  }, [index])

  return (
    <div
      ref={cardRef}
      className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border-2 border-pink-200 hover:border-pink-400 transition-all duration-300 hover:shadow-lg hover:shadow-pink-200/50 hover:-translate-y-1"
    >
      <span className="text-4xl block mb-3">{wish.icon}</span>
      <p
        className="text-text-main text-base md:text-lg leading-relaxed"
        style={{ fontFamily: 'var(--font-body)' }}
      >
        {wish.message}
      </p>
    </div>
  )
}

export default function WishMessage() {
  return (
    <section className="w-full py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2
            className="text-3xl md:text-5xl text-pink-500 text-center mb-12"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            💌 Lời Chúc Yêu Thương
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishes.map((wish, index) => (
            <WishCard key={index} wish={wish} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
