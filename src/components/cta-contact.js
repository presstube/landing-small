
import React from "react"

export default class CTAContact extends React.Component {
  render () {
    return (
      <div 
        style={{
          marginTop: 40,
          marginBottom: 20,
          // padding: 20,
        }}>
        <a
          href="mailto:j@presstube.com"
          style={{
            color: "#222",
            padding: 20,
            paddingTop: 24,
            // backgroundColor: "rgba(255, 255, 255, 0.5)",
            // backgroundColor: "rgba(0, 0, 0, 0.5)",
            backgroundColor: "white",
            borderRadius: 4
          }}>
            <b 
              className="tk-proxima-nova" 
              style={{
                fontSize: "200%",
                letterSpacing: 1.4
              }}>
                Contact
            </b>
          </a>
      </div>
    )
  }
}
            /*
              className="tk-ff-netto-web" 
            <span className="tk-ff-netto-web" style={{fontSize: "140%"}}>Contact</span>
*/
