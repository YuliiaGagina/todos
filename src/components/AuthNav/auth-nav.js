import { NavLink } from 'react-router-dom'

import { HeaderWrapper } from './AuthNav.styled'

export const AuthNav = () => {
  return (
    <HeaderWrapper>
      <ul>
        <li>
          <NavLink to="todos">My todos</NavLink>
        </li>
      </ul>
      <p> Welcome dear friend</p>
    </HeaderWrapper>
  )
}
