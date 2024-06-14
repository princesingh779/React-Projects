import React from 'react'

function bgChanger(props) {
  let Colorchange = () => {
    document.body.style.backgroundColor = props.color
  }

  return (
    <button onClick={Colorchange} className={`bg-${props.color}-400 mb-2 mt-2 rounded-xl p-2 mx-2`} >{props.color}</button>
  )
}

export default bgChanger
