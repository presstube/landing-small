
import React from "react"

export default class Overlay extends React.Component {
  render () {
    return (
      <div
        style={{
          position: "fixed",
          margin: 0,
          padding: 0,
          width: "100vw",
          height: "100vh",
          top: 0,
          left: 0,
          backgroundColor: "rgba(0, 0, 0, 0.3)",
          zIndex: 0
          // background: "url('assets/bg.jpg') no-repeat"
        }}>

      </div>
    )
  }
}
