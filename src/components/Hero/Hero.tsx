import { useState } from "react"
import styled from "styled-components"
import { animated, useSpring } from "react-spring"

function Hero() {
  const [toggle, setToggle] = useState(true)
  const props = useSpring({
    opacity: toggle ? 1 : 0,
    x: toggle ? 0 : 20,
    height: toggle ? 80 : 0,
    from: { opacity: 0, x: 20, height: 0 }
  })

  function hanldeClick() {
    setToggle(!toggle)
  }

  return (
    <StyledHero id="hero" onClick={hanldeClick}>
      <animated.h1
        style={{
          transform: props.x.interpolate((x) => `translate3d(0,${x}px,0)`),
          opacity: props.opacity
        }}
      >
        <animated.span style={{ height: props.height }}>
          Ryan Walker is a web developer.
        </animated.span>
      </animated.h1>
    </StyledHero>
  )
}

const StyledHero = styled.header`
  width: 100%;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #69d7ef;

  div,
  span {
    overflow: hidden;
  }

  h1 {
    height: 80px;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    position: relative;
    overflow: hidden;
  }
`

export default Hero
