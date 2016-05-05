
import React from "react"

// import BG from "./bg"
import Logo from "./logo"
import Blurb from "./blurb"
import CTA from "./cta"
import EyeoVid from "./eyeo-vid"

export default class App extends React.Component {
  render () {
    return (
      <div
        style={{
          padding: window.innerWidth < 420 
          ? 20
          : 40
        }}
        className="tk-ff-tisa-web-pro">
          <Logo />
          <Blurb />
          <CTA />
          <EyeoVid />

      </div>
    )
  }
}


/*
        className="tk-jaf-facitweb">
*/