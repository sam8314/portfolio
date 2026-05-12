import { useEffect, useRef } from 'react'

const DarkVeilBackground = ({ speed = 0.8 }) => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animationId
    let time = 0

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const draw = () => {
      if (!ctx) return
      
      time += speed * 0.01
      
      const width = canvas.width
      const height = canvas.height
      
      const gradient = ctx.createLinearGradient(0, 0, width, height)
      gradient.addColorStop(0, `hsl(${240 + Math.sin(time) * 10}, 70%, 15%)`)
      gradient.addColorStop(0.5, `hsl(${260 + Math.cos(time * 0.7) * 10}, 65%, 12%)`)
      gradient.addColorStop(1, `hsl(${280 + Math.sin(time * 0.5) * 10}, 60%, 8%)`)
      
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, width, height)
      
      // Add subtle noise/veil effect
      const imageData = ctx.getImageData(0, 0, width, height)
      const data = imageData.data
      
      for (let i = 0; i < data.length; i += 4) {
        const noise = Math.random() * 15
        data[i] = Math.min(255, data[i] + noise)     // R
        data[i+1] = Math.min(255, data[i+1] + noise) // G
        data[i+2] = Math.min(255, data[i+2] + noise) // B
      }
      
      ctx.putImageData(imageData, 0, 0)
      
      animationId = requestAnimationFrame(draw)
    }
    
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)
    draw()
    
    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationId)
    }
  }, [speed])
  
  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -2,
        pointerEvents: 'none',
      }}
    />
  )
}

export default DarkVeilBackground