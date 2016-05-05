
import React from "react"

export default class BG extends React.Component {
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
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          background: "url('assets/bg.jpg') no-repeat"
        }}>

      </div>
    )
  }
}
