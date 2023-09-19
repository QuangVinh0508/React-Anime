import React from 'react'
import { Navigate } from 'react-router-dom';

function GuestRoute({ children }) {
  const accessToken = window.sessionStorage.getItem('accessToken') || false;

  if(accessToken) {
    return <Navigate to="/" />
  }

  return (
    <div>{children}</div>
  )
}

export default GuestRoute