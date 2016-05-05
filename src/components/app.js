
import React from "react"

// import BG from "./bg"
import Logo from "./logo"
import Blurb from "./blurb"
import CTA from "./cta"

export default class App extends React.Component {
  render () {
    return (
      <div
        style={{
          padding: 40
        }}>
        <Logo />
        <Blurb />
        <CTA />
      </div>
    )
  }
}
