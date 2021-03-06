import { Link } from 'react-router-dom'
import React from 'react'
import Header from './header'

const Home = () => {
  return (
    <div>
      <Header />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          <div id="title">Dashboard</div>
          <div id="links">
            <Link to="/dashboard/main">Go To Main</Link> |
            <Link to="/dashboard/profile/f05ecb85-7f9b-4327-8e8d-37e090e1654f" className="m-2">
              Go To Profile
            </Link>{' '}
          </div>
        </div>
      </div>
    </div>
  )
}

Home.propTypes = {}

export default React.memo(Home)
