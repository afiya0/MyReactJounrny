import React, { useState } from 'react'

const UseState = () => {
    const[data,setData]=useState('eat');
    function clickHandle(){
        setData(data==='eat'?'drink':'eat')
    }
  return (
    <>
    <h1>{`${data} a little lemon`}</h1>
    <button onClick={clickHandle}>click</button>
    </>

  )
}

export default UseState