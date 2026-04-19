import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import ModulePage from './pages/ModulePage';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="modules/:id" element={<ModulePage />} />
      </Route>
    </Routes>
  );
}
