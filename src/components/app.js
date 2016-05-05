
import React from "react"

// import BG from "./bg"
import Logo from "./logo"
import Blurb from "./blurb"
import CTAContact from "./cta-contact"
import CTAEyeo from "./cta-eyeo"
// import EyeoVid from "./eyeo-vid"

export default class App extends React.Component {
  render () {
    return (
      <div
        style={{
          maxWidth: 700,
          padding: window.innerWidth < 420
            ? 20
            : 40,
        }}
        className="tk-ff-tisa-web-pro">
          <div
            style={{

            }}>
            <Logo />
          </div>
          <Blurb />
          <CTAContact />
      </div>
    )
  }
}


/*
          <CTAEyeo />
          <EyeoVid />
        className="tk-jaf-facitweb">
*/
