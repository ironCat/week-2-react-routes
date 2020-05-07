import { Link } from 'react-router-dom'
import React from 'react'
import Header from './header'

const Main = () => {
  return (
    <div>
      <Header />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          <div id="title">Main</div>
          <div id="links">
            <Link to="/dashboard/profile/f05ecb85-7f9b-4327-8e8d-37e090e1654f">Go To Profile</Link>{' '}
            |
            <Link to="/dashboard" className="m-2">
              Go To Root
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

Main.propTypes = {}

export default React.memo(Main)
