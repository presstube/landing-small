
import React from "react"

import Logo from "./logo"
import Blurb from "./blurb"
import CTAContact from "./cta-contact"
import Overlay from "./overlay"
import BG from "./bg"

export default class App extends React.Component {
  render () {
    return (
      <div>
        <BG />
        <Overlay />
        <div
          style={{
            position: "relative",
            maxWidth: 700,
            padding: "20px 20px 20px 20px",
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
