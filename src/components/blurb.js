
import React from "react"

export default class Blurb extends React.Component {
  render () {
    return (
      <div
        style={{
          margin: 0,
          marginTop: 20,
          // padding: 0,
          padding: "10px 20px 10px 20px",
          maxWidth: 500,
          color: "#eee",
          backgroundColor: "rgba(0,0,0,0.5)",
          borderRadius: 4
        }}>

        <p>
          Presstube Studio is a boutique software consultancy. 
        </p>

        <p>
          We specialize in prototyping, MVP production, custom tool-building, and bespoke user interfaces.
        </p>

        <p>
          Founded in 2000 by James Paterson (<a href="https://vimeo.com/69323991">watch James' EYEO talk</a>) Presstube has been cracking creative and technical nuts for likes of Apple, Nike, Sony, Burton, Bjork, Sid Lee, and Fiftythree ever since.
        </p>

        <p>
          If you have an idea you'd like to bring to life you should get in touch!
        </p>

      </div>
    )
  }
}
