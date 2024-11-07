import React from 'react'
import { useNavigate } from 'react-router-dom';

const Dex = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Dex</h1>
      <button onClick={() => {
        navigate("/")
      }} >Home</button>
      </div>
  )
}

export default Dex