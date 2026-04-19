import { useState, useEffect, useCallback } from 'react';
import type { Slide } from '../data/modules';

interface SlideDeckProps {
  slides: Slide[];
}

export default function SlideDeck({ slides }: SlideDeckProps) {
  const [index, setIndex] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);
  const safeIndex = Math.min(index, slides.length - 1);
  const slide = slides[safeIndex];

  const prev = useCallback(() => setIndex((i) => Math.max(0, i - 1)), []);
  const next = useCallback(
    () => setIndex((i) => Math.min(slides.length - 1, i + 1)),
    [slides.length],
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'Escape' && fullscreen) setFullscreen(false);
      if (e.key === 'f' && !fullscreen) setFullscreen(true);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [prev, next, fullscreen]);

  useEffect(() => {
    setIndex(0);
  }, [slides]);

  return (
    <div className={`slide-deck${fullscreen ? ' fullscreen' : ''}`}>
      <button
        className="slide-fullscreen-btn"
        onClick={() => setFullscreen((f) => !f)}
        title={fullscreen ? 'Exit fullscreen (Esc)' : 'Fullscreen (F)'}
        aria-label={fullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
      >
        {fullscreen ? '✕' : '⛶'}
      </button>

      <div className="slide-container" role="region" aria-label="Slide content">
        <h2>{slide.title}</h2>

        {slide.quote && (
          <blockquote className="slide-quote">
            <p>{slide.quote.text}</p>
            <cite>— {slide.quote.author}</cite>
          </blockquote>
        )}

        {slide.body && <p className="slide-body">{slide.body}</p>}

        {slide.bullets && (
          <ul>
            {slide.bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        )}
      </div>

      <div className="slide-controls">
        <button onClick={prev} disabled={safeIndex === 0} aria-label="Previous slide">
          ←
        </button>
        <span className="slide-counter">
          {safeIndex + 1} / {slides.length}
        </span>
        <button
          onClick={next}
          disabled={safeIndex === slides.length - 1}
          aria-label="Next slide"
        >
          →
        </button>
      </div>
    </div>
  );
}
