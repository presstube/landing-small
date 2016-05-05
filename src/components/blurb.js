
import React from "react"

export default class Blurb extends React.Component {
  render () {
    return (
      <div
        style={{
          margin: 0,
          // marginTop: 20,
          // marginTop: window.innerWidth < 420
          //   ? 20
          //   : 20,
          // padding: 0,
          padding: "10px 20px 10px 20px",  
          color: "#eee",
          // backgroundColor: "rgba(0,0,0,0.5)",
          // borderRadius: 4,
          fontSize: "140%",
          letterSpacing: 1.3
        }}
        >

        <p>
          <b style={{fontSize: "250%"}}>Presstube Studio</b><br/> is a boutique software consultancy specializing in prototyping, MVPs, tool-building, and custom user interfaces.
        </p>



        <p>
          Founded in 2000 by James Paterson (<a href="https://vimeo.com/69323991">watch James at Eyeo</a>), Presstube has been cracking creative and technical nuts for likes of Apple, Nike, Sony, Burton, Bjork, Sid Lee, and Fiftythree ever since.
        </p>

        <p>
          If you want an idea brought to life get in touch!
        </p>

      </div>
    )
  }
}


/*
          <span className="tk-proxima-nova" style={{fontSize: "250%"}}>Presstube Studio</span> is a boutique software consultancy specializing in prototyping, MVPs, tool-building, and custom user interfaces.
        <p>
          If you have an idea you'd like to bring to life, <a href="mailto:j@presstube.com">get in touch</a>.
        </p>

          <span className="tk-ff-netto-web" style={{fontSize: "140%"}}>Presstube Studio</span> is a boutique software consultancy specializing in prototyping, MVP production, custom tool-building, and bespoke user interfaces.
        <p>
          If you have an idea you'd like to bring to life, <a href="mailto:j@presstube.com">get in touch</a>.
        </p>

*/