import { useState } from "react"
import { useSpring, animated } from "react-spring"
import styled from "styled-components"
import Link from "next/link"

function Nav() {
  const [toggle, setToggle] = useState(false)
  const props = useSpring({
    opacity: toggle ? 1 : 0,
    x: toggle ? 173 : 0,
    listX: toggle ? 0 : -300,
    from: { opacity: 0, x: 0, listX: -300 }
  })

  function handleButtonClick() {
    setToggle(!toggle)
  }

  return (
    <StyledNav>
      <ToggleButton
        style={{
          transform: props.x.interpolate((x) => `translate3d(${x}px,0,0)`)
        }}
        onClick={handleButtonClick}
      >
        X
      </ToggleButton>
      {toggle && (
        <NavList
          style={{
            opacity: props.opacity,
            transform: props.listX.interpolate((x) => `translate3d(${x}px,0,0)`)
          }}
        >
          <NavItem>
            <Link href="/">
              <NavLink>Home</NavLink>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/projects">
              <NavLink>Projects</NavLink>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/about">
              <NavLink>About</NavLink>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/contact">
              <NavLink>Contact</NavLink>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/blog">
              <NavLink>Blog</NavLink>
            </Link>
          </NavItem>
        </NavList>
      )}
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  /* position: fixed; */
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  background: #69d7ef;
  z-index: 1000;
`

const NavList = styled(animated.ul)`
  width: 60%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.3);
  list-style: none;
  text-transform: lowercase;
  /* position: absolute;
  top: 0;
  left: 0; */
  margin: 0;
  padding-top: 32px;
  /* justify-content: space-between; */
  /* margin: 0 auto; */
  /* padding: 24px 0; */
`

const NavItem = styled.li`
  margin-right: 24px;
  padding: 24px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
`

const NavLink = styled.a`
  color: #fff;
  cursor: pointer;
`

const ToggleButton = styled(animated.button)`
  position: absolute;
  top: 15px;
  left: 15px;
  border: none;
  background: transparent;
  font-size: 24px;
  z-index: 1001;
  transform: ${({ toggle }: any) =>
    toggle ? "translate3d(173px, 0, 0)" : "translate3d(0, 0, 0)"};
`

export default Nav
