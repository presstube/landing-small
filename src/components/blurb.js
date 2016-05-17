
import React from "react"

export default class Blurb extends React.Component {
  render () {
    return (
      <div
        style={{
          margin: 0,
          padding: "10px 20px 10px 20px",  
          color: "#eee",
          fontSize: "140%",
        }}
        >

        <p>
          <b style={{fontSize: "250%"}}>Presstube</b><br/> is a boutique software consultancy. We specialize in prototyping, MVPs, tool-building, and custom user interfaces.
        </p>

        <p>
          Founded in 2000 by James Paterson (<a href="https://vimeo.com/69323991">watch James' Eyeo talk</a>), Presstube has been cracking creative and technical nuts ever since. Past clients inclued Apple, Nike, Sony, Burton, Bjork, Sid Lee, and Fiftythree.
        </p>

        <p>
          Have you got an itchy idea? Get in touch and we'll give it a scratch.
        </p>

      </div>
    )
  }
}