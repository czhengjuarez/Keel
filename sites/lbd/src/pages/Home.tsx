import { Link } from 'react-router-dom';
import { modules } from '../data/modules';
import CourseIcon from '../components/CourseIcon';

export default function Home() {
  return (
    <>
      <section className="hero">
        <p className="hero-eyebrow">Ops Forward Workshop</p>
        <h1>Leadership by Design</h1>
        <p>
          A 6-module workshop exploring how designers lead — themselves, their peers, their
          teams, and their organizations. Built for in-person and asynchronous learning.
        </p>
      </section>

      <div className="module-grid">
        {modules.map((m) => (
          <Link key={m.id} to={`/modules/${m.id}`} className="module-card">
            <div className="module-card-header">
              <div className="module-card-icon" aria-hidden="true">
                <CourseIcon name={m.icon} size={24} />
              </div>
              <div>
                <p className="module-card-subtitle">Module {m.number}</p>
                <h3>{m.title}</h3>
              </div>
            </div>
            <p>{m.description}</p>
          </Link>
        ))}
      </div>
    </>
  );
}
