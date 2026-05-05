'use client'

import { useEffect, useRef } from 'react'

export default function StarBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const stars = Array.from({ length: 150 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.2,
      o: Math.random(),
      speed: Math.random() * 0.005 + 0.002,
    }))

    let frame
    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      stars.forEach(s => {
        s.o += s.speed
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(237, 233, 224, ${Math.abs(Math.sin(s.o))})`
        ctx.fill()
      })
      frame = requestAnimationFrame(draw)
    }

    draw()
    return () => cancelAnimationFrame(frame)
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
    />
  )
}
