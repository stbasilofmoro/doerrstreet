import React from "react"
import Navbar from "./Navbar.jsx"
import Hero from "../Hero.jsx"

/** Full home layout: sticky menubar + hero. Use as a single Framer code component, or compose manually. */
export default function HomePage({ currentPath = "/" }) {
  return (
    <>
      <Navbar currentPath={currentPath} />
      <Hero />
    </>
  )
}
