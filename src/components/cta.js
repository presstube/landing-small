
import React from "react"

export default class CTA extends React.Component {
  render () {
    return (
      <div 
        style={{
          marginTop: 40,
          // padding: 20,
        }}>
        <a
          href="mailto:j@presstube.com"
          style={{
            color: "#eee",
            padding: 20,
            // backgroundColor: "rgba(255, 255, 255, 0.5)",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            borderRadius: 4
          }}>
            CONTACT
          </a>
      </div>
    )
  }
}
