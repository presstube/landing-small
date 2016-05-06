
import React from "react"

export default class BG extends React.Component {
  componentDidMount () {
    window.addEventListener("resize", () => {
      // console.log(this.refs.lala)
      const {innerWidth: w, innerHeight: h} = window
      Object.assign(this.refs.lala.style, {
        width: w > h ? "100%" : null,
        height: h > w ? "100%" : null,
        left: h > w ? "-50%" : null
      })
    })
  }
  render () {
    const {innerWidth: w, innerHeight: h} = window
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
        <img
          ref="lala"
          src="assets/bg.jpg"
          style={{
            position: "relative",
            width: w > h ? "100%" : null,
            height: h > w ? "100%" : null
            // width: w > h ? w : null,
            // height: h > w ? h : null,
          }}
        />
      </div>
    )
  }
}
