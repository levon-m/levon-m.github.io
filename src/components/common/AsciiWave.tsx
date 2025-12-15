import { useEffect, useState, useRef } from 'react'

interface AsciiWaveProps {
  rows?: number
  speed?: number
  opacity?: number
}

// Characters used for the wave, ordered by "height"
const WAVE_CHARS = [' ', '.', '-', '~', '=', '*', '#']

function generateWaveLine(
  width: number,
  time: number,
  rowIndex: number,
  totalRows: number
): string {
  let line = ''
  const rowPhaseOffset = (rowIndex / totalRows) * Math.PI * 1.5

  for (let x = 0; x < width; x++) {
    // Create audio wave pattern with wider spacing between cycles
    const waveValue =
      Math.sin((x / 8) + time + rowPhaseOffset) * 1.0 +
      Math.sin((x / 4) + time * 1.5 + rowPhaseOffset) * 0.3

    // Normalize with more extreme contrast (more pronounced peaks)
    const normalized = Math.pow((waveValue + 1.2) / 2.4, 1.5)

    // Map to character index with threshold for whitespace
    const charIndex = normalized < 0.3 ? 0 : Math.floor(normalized * (WAVE_CHARS.length - 1))
    line += WAVE_CHARS[Math.max(0, Math.min(charIndex, WAVE_CHARS.length - 1))]
  }

  return line
}

export default function AsciiWave({
  rows = 6,
  speed = 0.03,
  opacity = 0.15,
}: AsciiWaveProps) {
  const [lines, setLines] = useState<string[]>([])
  const timeRef = useRef(0)
  const animationRef = useRef<number>()
  const containerRef = useRef<HTMLDivElement>(null)
  const [width, setWidth] = useState(120)

  // Check for reduced motion preference
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches)
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  // Calculate width based on container
  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        // Approximate characters that fit (monospace ~8px per char at typical sizes)
        const containerWidth = containerRef.current.offsetWidth
        const charWidth = 8
        setWidth(Math.floor(containerWidth / charWidth) + 20)
      }
    }

    updateWidth()
    window.addEventListener('resize', updateWidth)
    return () => window.removeEventListener('resize', updateWidth)
  }, [])

  // Animation loop
  useEffect(() => {
    const generateLines = () => {
      const newLines: string[] = []
      for (let i = 0; i < rows; i++) {
        newLines.push(generateWaveLine(width, timeRef.current, i, rows))
      }
      setLines(newLines)
    }

    // Generate initial static frame
    generateLines()

    // If reduced motion, don't animate
    if (prefersReducedMotion) {
      return
    }

    const animate = () => {
      timeRef.current += speed
      generateLines()
      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [rows, speed, width, prefersReducedMotion])

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none select-none"
      aria-hidden="true"
    >
      <pre
        className="font-mono text-xs leading-tight text-accent whitespace-pre"
        style={{ opacity }}
      >
        {lines.filter(line => line !== undefined).map((line, i) => (
          <div key={i}>{line || ''}</div>
        ))}
      </pre>
    </div>
  )
}
