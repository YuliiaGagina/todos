import { Outlet } from 'react-router-dom'

import { AuthNav } from 'components/AuthNav/auth-nav'

export const Navbar = () => {
  return (
    <div>
      {<AuthNav />}
      <Outlet />
    </div>
  )
}
