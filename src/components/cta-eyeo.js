
import React from "react"

export default class CTAEyeo extends React.Component {
  render () {
    return (
      <div 
        style={{
          marginTop: 40,
          marginBottom: 20,
          // padding: 20,
        }}>
        <a
          href="https://vimeo.com/69323991"
          style={{
            // color: "#eee",
            padding: 20,
            // backgroundColor: "rgba(255, 255, 255, 0.5)",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            borderRadius: 4
          }}>
            <span 
              className="tk-ff-netto-web" 
              style={{
                fontSize: "140%",
                letterSpacing: 1.4
              }}>
                Watch James at Eyeo
            </span>
          </a>
      </div>
    )
  }
}
            /*
            <span className="tk-ff-netto-web" style={{fontSize: "140%"}}>Contact</span>
*/
