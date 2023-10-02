import React from 'react'
import { Link } from 'react-router-dom'

const Missing = () => {
  return (
    <main className='Missing'>
        <h2>Page not Found</h2>
        <p>Well, thats dissapointing</p>
        <p>
          <Link to= '/'>Visit our HomePage</Link>
        </p>
    </main>
  )
}

export default Missing