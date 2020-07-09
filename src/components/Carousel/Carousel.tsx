import { useState } from "react"
import styled from "styled-components"
import { animated, useSpring } from "react-spring"

function CarouselImage({ src, isActive }) {
  return <StyledCarouselImage src={src} />
}

function Carousel({ slice }) {
  const [activeImage, setActiveImage] = useState(0)
  const [toggle, setToggle] = useState(false)
  const { x } = useSpring({
    x: toggle ? "-100%" : "0%"
  })
  return (
    <StyledCarousel>
      <LeftButton>{"<"}</LeftButton>
      <Slider x={x as any}>
        {slice.items.map((image, index) => (
          <CarouselImage
            src={image.carousel_image.url}
            key={image.carousel_image.url}
            isActive={index === activeImage}
          />
        ))}
      </Slider>
      <RightButton onClick={() => setToggle(!toggle)}>{">"}</RightButton>
    </StyledCarousel>
  )
}

const StyledCarousel = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 500px;
  position: relative;
  overflow-x: hidden;
  margin-top: 16px;
  margin-bottom: 4rem;
  /* @media @tablet {
    height: 100%;
  } */
`

const Slider = styled(animated.div)`
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
  transform: ${({ x }: any) => x.interpolate((x) => `translate3d(0,${x}px,0)`)};
`

const CarouselButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(0, 0, 0, 0.5);
  background-color: rgba(255, 255, 255, 0.4);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  border: 1px transparent;
  font-size: 20px;
  border-radius: 50%;
  position: absolute;
  width: 50px;
  height: 50px;
  z-index: 100;
  transition: all 300ms;
  cursor: pointer;
  &:hover {
    color: rgba(255, 255, 255, 1);
    background-color: rgba(255, 255, 255, 0.5);
    /* // border: 2px solid rgba(0, 0, 0, 0.5); */
  }
`

const LeftButton = styled(CarouselButton)`
  top: 50%;
  left: 25px;
  transform: translate(0, -50%);
`

const RightButton = styled(CarouselButton)`
  top: 50%;
  right: 25px;
  transform: translate(0, -50%);
`

const StyledCarouselImage = styled.img`
  width: 100%;
  flex: 0 0 auto;
`

export default Carousel
