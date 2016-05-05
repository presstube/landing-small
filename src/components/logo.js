
import React from "react"
import ReactDOM from "react-dom"

export default class Logo extends React.Component {

  componentDidMount () {
    const canvas = ReactDOM.findDOMNode(this)
    const root = new lib.ptlogo100sq()
    const stage = new createjs.Stage(canvas)
    const main = root.main
    Object.assign(this, { canvas, root, stage, main })
    stage.addChild(root)
    stage.update()
    createjs.Ticker.setFPS(30)
    createjs.Ticker.addEventListener("tick", stage)
    main.gotoAndStop(0)
    this.onResize()
    window.addEventListener("resize", this.onResize.bind(this))
    window.addEventListener("scroll", this.onScroll.bind(this))
  }

  onResize () {
    const { canvas, stage } = this
    const dpr = window.devicePixelRatio
    canvas.width = canvas.height = dpr * 100
    stage.scaleX = stage.scaleY = dpr
    Object.assign(canvas.style, {
      width: "100px",
      height: "100px"
    })
    console.log("on resize: ", canvas, stage)
  }

  onScroll () {
    const { main } = this
    main.gotoAndStop(Math.abs(document.body.scrollTop % main.totalFrames))
    console.log(document.body.scrollTop)
  }

  render () {
    return (
      <canvas
        style={{
          padding: 20,
          // backgroundColor: "rgba(255, 255, 255, 0.5)",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          borderRadius: 4
        }}/>
    )
  }
}
