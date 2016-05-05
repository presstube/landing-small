
import React from "react"
import ReactDOM from "react-dom"

export default class Logo extends React.Component {

  componentDidMount () {
    const canvas = this.canvas = ReactDOM.findDOMNode(this)
    const root = new lib.ptlogo100sq()
    const stage = this.stage = new createjs.Stage(this.canvas)
    const main = root.main
    stage.addChild(root)
    stage.update()
    createjs.Ticker.setFPS(30)
    createjs.Ticker.addEventListener("tick", stage)
    main.gotoAndStop(0)
    this.onResize()
    window.addEventListener("resize", this.onResize.bind(this))
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

  render () {
    return (
      <canvas />
    )
  }
}
