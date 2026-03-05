import { useEffect, useRef, useState } from 'react'

const FLOWERS = ['🌸', '🌺', '🌷', '💮', '🏵️', '💐', '🌹', '🌻']

function createPetal(width) {
  return {
    id: Math.random(),
    x: Math.random() * width,
    y: -50,
    size: 14 + Math.random() * 18,
    speed: 0.5 + Math.random() * 1.5,
    wobble: Math.random() * 2 - 1,
    wobbleSpeed: 0.02 + Math.random() * 0.03,
    rotation: Math.random() * 360,
    rotationSpeed: (Math.random() - 0.5) * 2,
    flower: FLOWERS[Math.floor(Math.random() * FLOWERS.length)],
    opacity: 0.6 + Math.random() * 0.4,
  }
}

export default function FlowerParticles() {
  const canvasRef = useRef(null)
  const petalsRef = useRef([])
  const frameRef = useRef(null)
  const [isMobile] = useState(() => window.innerWidth < 768)

  useEffect(() => {
    const maxPetals = isMobile ? 15 : 30

    const animate = () => {
      const canvas = canvasRef.current
      if (!canvas) return

      canvas.width = window.innerWidth
      canvas.height = window.innerHeight

      // Add new petals
      if (petalsRef.current.length < maxPetals && Math.random() > 0.92) {
        petalsRef.current.push(createPetal(canvas.width))
      }

      const ctx = canvas.getContext('2d')
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      petalsRef.current = petalsRef.current.filter((p) => {
        p.y += p.speed
        p.x += Math.sin(p.y * p.wobbleSpeed) * p.wobble
        p.rotation += p.rotationSpeed

        if (p.y > canvas.height + 50) return false

        ctx.save()
        ctx.translate(p.x, p.y)
        ctx.rotate((p.rotation * Math.PI) / 180)
        ctx.globalAlpha = p.opacity
        ctx.font = `${p.size}px serif`
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'
        ctx.fillText(p.flower, 0, 0)
        ctx.restore()

        return true
      })

      frameRef.current = requestAnimationFrame(animate)
    }

    frameRef.current = requestAnimationFrame(animate)

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current)
    }
  }, [isMobile])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-10"
      style={{ width: '100%', height: '100%' }}
    />
  )
}
