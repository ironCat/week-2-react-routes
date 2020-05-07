import React from 'react'
import { Link, useParams } from 'react-router-dom'

import Header from './header'

const Profile = () => {
  const { user } = useParams()
  return (
    <div>
      <Header />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          <div id="title">Profile</div>
          <div id="username">{user}</div>
          <div id="links">
            <Link to="/dashboard/main">Go To Main</Link> |
            <Link to="/dashboard" className="m-2">
              Go To Root
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

Profile.propTypes = {}

export default React.memo(Profile)
