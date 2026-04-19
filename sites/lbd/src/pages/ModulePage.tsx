import { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { modules } from '../data/modules';
import SlideDeck from '../components/SlideDeck';

type Tab = 'slides' | 'resources' | 'books' | 'practice';

export default function ModulePage() {
  const { id } = useParams<{ id: string }>();
  const mod = modules.find((m) => m.id === id);
  const [tab, setTab] = useState<Tab>('slides');

  if (!mod) return <Navigate to="/" replace />;

  return (
    <>
      <div className="module-header">
        <p className="module-header-eyebrow">Module {mod.number}</p>
        <h1>{mod.title}</h1>
        <p>{mod.subtitle} — {mod.description}</p>
      </div>

      <div className="tabs" role="tablist">
        {(['slides', 'resources', 'books', 'practice'] as Tab[]).map((t) => (
          <button
            key={t}
            role="tab"
            aria-selected={tab === t}
            className={`tab-btn${tab === t ? ' active' : ''}`}
            onClick={() => setTab(t)}
          >
            {t === 'slides'
              ? 'Slides'
              : t === 'resources'
              ? 'Resources'
              : t === 'books'
              ? 'Books'
              : 'Practice'}
          </button>
        ))}
      </div>

      {tab === 'slides' && <SlideDeck slides={mod.slides} />}

      {tab === 'resources' && (
        <div className="resource-list">
          {mod.resources.map((r, i) => (
            <a
              key={i}
              href={r.url}
              target="_blank"
              rel="noopener noreferrer"
              className="resource-card"
            >
              <span className="resource-type-badge">{r.type}</span>
              <div className="resource-info">
                <h4>{r.title}</h4>
                <p>{r.description}</p>
              </div>
            </a>
          ))}
        </div>
      )}

      {tab === 'books' && (
        <div className="books-list">
          {mod.books.map((b, i) => (
            <a
              key={i}
              href={b.url}
              target="_blank"
              rel="noopener noreferrer"
              className="book-card"
            >
              {b.thumbnailUrl && (
                <img
                  src={b.thumbnailUrl}
                  alt={`${b.title} cover`}
                  className="book-thumb"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              )}
              <div className="book-info">
                {b.topPick && <span className="book-top-pick">Top pick (BOOKS p.2)</span>}
                <h4>{b.title}</h4>
                <p className="book-author">by {b.author}</p>
                {b.note && <p className="book-note">{b.note}</p>}
              </div>
            </a>
          ))}
        </div>
      )}

      {tab === 'practice' && (
        <div className="practice-list">
          {mod.practice.map((p, i) => (
            <div key={i} className="practice-card">
              {p.aiEncouraged && (
                <span className="ai-badge">✦ AI-Assisted Encouraged</span>
              )}
              <h3>{p.title}</h3>
              <p className="practice-desc">{p.description}</p>
              <div className="practice-deliverable">
                <strong>Deliverable:</strong> {p.deliverable}
                {p.dueInfo && (
                  <>
                    <br />
                    <strong>Due:</strong> {p.dueInfo}
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
