
import React from "react"
import ReactDOM from "react-dom"

export default class Logo extends React.Component {

  componentDidMount () {
    const canvas = ReactDOM.findDOMNode(this)
    const root = window.root = new lib.ptlogo100sq()
    const stage = new createjs.Stage(canvas)
    const {main} = root
    stage.addChild(root)
    stage.update()
    createjs.Ticker.setFPS(30)
    createjs.Ticker.addEventListener("tick", stage)
    main.gotoAndStop(0)
    console.log(canvas)
  }

  render () {
    return (
      <canvas width="100" height="100">
        LOGO
      </canvas>
    )
  }
}
