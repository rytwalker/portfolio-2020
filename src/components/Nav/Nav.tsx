import styled from "styled-components"
import Link from "next/link"

function Nav() {
  return (
    <StyledNav>
      <NavList>
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
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background: #69d7ef;
  z-index: 1000;
`

const NavList = styled.ul`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 24px 0;
  display: flex;
  list-style: none;
`

const NavItem = styled.li`
  margin-right: 24px;
`

const NavLink = styled.a`
  color: #fff;
  cursor: pointer;
`

export default Nav
