import { Link } from 'react-router-dom'
import React from 'react'

const NavLink = ({path,children,classname}) => {
  return (
      <Link to={path}>{children}</Link>
  )
}

export default NavLink