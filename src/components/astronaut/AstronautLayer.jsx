import { useEffect, useState } from 'react'
import AstronautCanvas from './AstronautCanvas'

export default function AstronautLayer({ progress }) {
  const [reducedMotion, setReducedMotion] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  const [supported] = useState(() => Boolean(document.createElement('canvas').getContext('webgl') || document.createElement('canvas').getContext('experimental-webgl')))
  useEffect(() => { const query = window.matchMedia('(prefers-reduced-motion: reduce)'); const sync = () => setReducedMotion(query.matches); query.addEventListener?.('change', sync); return () => query.removeEventListener?.('change', sync) }, [])
  if (!supported) return <div className="astronaut-fallback" aria-hidden="true">✦</div>
  return <div className="astronaut-layer" data-scroll-progress={progress.toFixed(3)} aria-hidden="true"><AstronautCanvas reducedMotion={reducedMotion} /></div>
}
