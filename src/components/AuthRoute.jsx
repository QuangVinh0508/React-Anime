import React from 'react'
import { Navigate } from 'react-router-dom';

function AuthRoute({ children }) {
  const accessToken = window.sessionStorage.getItem('accessToken') || false;

  if(!accessToken) {
    return <Navigate to="/login" />
  }

  return (
    <div>{children}</div>
  )
}

export default AuthRoute