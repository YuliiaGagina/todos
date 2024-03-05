import { Route, Routes } from 'react-router-dom';
import { Navbar } from './Navbar/Navbar';
import { Todos } from 'pages/Todos/Todos';

import { Home } from './Home/Home';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />

        <Route path="/todos" element={<Todos />} />
      </Route>
    </Routes>
  );
}
