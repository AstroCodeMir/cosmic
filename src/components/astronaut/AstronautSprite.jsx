import { useEffect, useRef, useState } from 'react'

const sprite = (name) => `/astronaut/${name}.png`

export default function AstronautSprite({ progress, reducedMotion, motionRef }) {
  const [frame, setFrame] = useState('astronaut-idle')
  const [flying, setFlying] = useState(false)
  const [facingLeft, setFacingLeft] = useState(false)
  const [entrance, setEntrance] = useState(true)
  const frameRef = useRef(frame)
  const facingRef = useRef(false)
  useEffect(() => { const timer = window.setTimeout(() => setEntrance(false), 3200); return () => window.clearTimeout(timer) }, [])
  useEffect(() => {
    if (reducedMotion) return undefined
    let raf
    const update = () => {
      const { dx, dy, speed, mode } = motionRef.current.current
      const moving = !['HOME_INFINITY', 'TRANSITION_TO_PATROL', 'IDLE_HOVER'].includes(mode) && speed > 0.035
      const nextFacingLeft = dx < -.0001
      const next = mode === 'SCROLL_BACKWARD' ? 'astronaut-fly-back' : moving ? (mode === 'SCROLL_FORWARD' ? 'astronaut-fly-full' : Math.abs(dy) > Math.abs(dx) * 1.5 ? 'astronaut-fly-start' : 'astronaut-fly-mid') : progress < .025 ? 'astronaut-idle' : (Math.abs(dx) > .0001 ? 'astronaut-side' : 'astronaut-front-three-quarter')
      if (frameRef.current !== next) { frameRef.current = next; setFrame(next) }
      setFlying((current) => current === moving ? current : moving)
      if (facingRef.current !== nextFacingLeft) { facingRef.current = nextFacingLeft; setFacingLeft(nextFacingLeft) }
      raf = requestAnimationFrame(update)
    }
    raf = requestAnimationFrame(update)
    return () => cancelAnimationFrame(raf)
  }, [motionRef, progress, reducedMotion])
  const displayFrame = reducedMotion ? 'astronaut-idle' : frame
  const activeFlight = flying && !reducedMotion
  return <div className={`sprite-astronaut${entrance ? ' is-entering' : ''}${activeFlight ? ' is-flying' : ''}${facingLeft ? ' is-facing-left' : ''}`} data-sprite={displayFrame}>
    <img src={sprite(displayFrame)} alt="" draggable="false" />
    <span className="sprite-jet sprite-jet-left" aria-hidden="true" />
    <span className="sprite-jet sprite-jet-right" aria-hidden="true" />
  </div>
}

