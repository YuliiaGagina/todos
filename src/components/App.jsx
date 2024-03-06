import { Route, Routes } from 'react-router-dom'
import { Navbar } from './Navbar/navbar'
import { Todos } from 'pages/Todos/todos'
import { Home } from './Home/home'

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />

        <Route path="/todos" element={<Todos />} />
      </Route>
    </Routes>
  )
}
