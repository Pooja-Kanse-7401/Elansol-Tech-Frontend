import React from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

  const registerFun = () =>{
    navigate('/register')

  }
  const LoginFun = () =>{
    navigate('/login')
  }
  return (
    <>
      <div className="flex justify-center items-center flex-col h-[50vh] w-[100%]">
        <h1 className="text-4xl p-4 text-cyan-500 font-bold">Welcome</h1>
        <span>
          <button onClick={LoginFun} className="text-3xl p-4 m-4 bg-cyan-500 text-white rounded-md font-semibold">Login</button>
          <button onClick={registerFun} className="text-3xl p-4 m-4 bg-cyan-500 text-white rounded-md font-semibold">Register</button>
        </span>
      </div>
    </>
  )
}

export default Home
