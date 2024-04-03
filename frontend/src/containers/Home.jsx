import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className=''>
        <div className=''>
            <h1 className=''>Welcome to Auth System!</h1>
            <p className=''>This is an incredible authentication system with production level features!</p>
            <hr className='' />
            <p>Click the Log In button</p>
            <Link className='' to='/login' role='button'>Login</Link>
        </div>
    </div>
  )
}

export default Home