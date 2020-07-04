import React from "react"

import { render, screen } from "../utils"
import Hero from "../../components/Hero/Hero"

describe("Hero", () => {
  it("should render Hero", () => {
    render(<Hero />)
    expect(screen.getByText("Ryan Walker")).toBeInTheDocument()
  })
})
