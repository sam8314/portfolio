import { Grainient } from '@antoineview/grainient/react'

const DarkVeilBackground = ({ speed = 1.4 }) => (
  <div
    style={{
      position: 'fixed',
      inset: 0,
      width: '100%',
      height: '100%',
      zIndex: -2,
      pointerEvents: 'none',
      overflow: 'hidden',
    }}
  >
  <Grainient
    colors={["#170636", "#3f1c6e", "#781691", "#827b18"]}
    speed={1.4}
    grain={0.1}
    scale={1}
    seed={3}
    mesh={2}
    smoothness={0.35}
    style={{ width: '100%', height: '100%' }}
    paused={false}
  />
  </div>
)

export default DarkVeilBackground
