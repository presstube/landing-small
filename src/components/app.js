
import React from "react"

// import BG from "./bg"
import Logo from "./logo"
import Blurb from "./blurb"
import CTAContact from "./cta-contact"
import CTAEyeo from "./cta-eyeo"
import Overlay from "./overlay"
// import EyeoVid from "./eyeo-vid"

export default class App extends React.Component {
  render () {
    return (
      <div>
        <Overlay />
        <div
          style={{
            position: "relative",
            maxWidth: 800,
            padding: window.innerWidth < 420
              ? 20
              : 20,
            xIndex: 10,
            marginTop: 20,
            marginBottom: 20
          }}
          className="tk-proxima-nova">
            <div
              style={{

              }}>
              <Logo />
            </div>
            <Blurb />
            <CTAContact />
        </div>
      </div>
    )
  }
}


/*
          <CTAEyeo />
          <EyeoVid />
        className="tk-ff-tisa-web-pro">
        className="tk-jaf-facitweb">
*/
