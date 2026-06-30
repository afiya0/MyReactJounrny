import React, { useState } from 'react'

const Mode = () => {
    const[darkMode,setDarkMode]=useState(false)
    function toogleMode(){
        setDarkMode(!darkMode)
    }
  return (
    <div  style={{
        backgroundColor: darkMode ? "black" : "white",
        color: darkMode ? "white" : "black",
        height: "100vh",
        padding: "20px",
      }}>Mode
        <h1>{darkMode?'darkmdoe':'LightMode'}</h1>
        <button onClick={toogleMode}>mode</button>
    </div>
  )
}

export default Mode