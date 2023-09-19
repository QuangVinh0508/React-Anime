import React from 'react'

import Header from '../Header';


function FootLessLayout({ children }) {
  return (
    <>
      <Header />

      <main>
        <div className='container'>
          {children}
        </div>
      </main>
    </>
  )
}

export default FootLessLayout