import { useEffect, useState } from 'react'
import './App.css'

class Radian {
  static fromDegrees(value: number) {
    return value * (Math.PI / 180)
  }
}

function App() {
  const [angle, setAngle] = useState(0)

  useEffect(() => {
    const callback = () => setAngle((rotation) => {
      if (rotation === 360) return 0
      return rotation + 1
    });
    const id = setInterval(callback, 1000/16)

    return () => clearInterval(id)
  }, [])

  return (
    <rotate angle={Radian.fromDegrees(angle)}>
      <rectangle positionX={0} positionY={0} width={100} height={100} />
    </rotate>
  )
}

export default App
