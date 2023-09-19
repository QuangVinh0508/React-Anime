import React from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
  const navigate = useNavigate();

  function onSubmit() {
    // call api to get login ...
    window.sessionStorage.setItem('accessToken', '123456789');
    navigate('/');
  }

  return (
    <div>
      Email: <input type="text" /> <br />
      Password: <input type="password" /> <br />
      <button onClick={onSubmit}>Login</button>

    </div>
  )
}

export default Login