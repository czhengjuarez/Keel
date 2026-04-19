import { NavLink, Outlet } from 'react-router-dom';
import { modules } from '../data/modules';

export default function Layout() {
  return (
    <div className="app-layout">
      <aside className="sidebar">
        <div className="sidebar-brand">
          <h1>Leadership by Design</h1>
          <span>Ops Forward Workshop</span>
        </div>
        <nav className="sidebar-nav" aria-label="Module navigation">
          <NavLink to="/" end className={({ isActive }) => `sidebar-link${isActive ? ' active' : ''}`}>
            <span className="module-num">⌂</span>
            Home
          </NavLink>
          {modules.map((m) => (
            <NavLink
              key={m.id}
              to={`/modules/${m.id}`}
              className={({ isActive }) => `sidebar-link${isActive ? ' active' : ''}`}
            >
              <span className="module-num">{m.number}</span>
              {m.title}
            </NavLink>
          ))}
        </nav>
      </aside>
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}
