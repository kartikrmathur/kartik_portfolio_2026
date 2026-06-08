import { useCallback, useEffect, useState } from 'react';
import MaterialIcon from '../MaterialIcon/MaterialIcon';
import portfolioData from '../../data/portfolioData';

const ROTATE_MS = 4000;

const TestimonialSlide = ({ testimonial }) => {
  const initials = testimonial.name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2);

  return (
    <article className="testimonial-slide">
      <div className="testimonial-strip-card glass-card">
        <div className="testimonial-strip-stars" aria-label="5 out of 5 stars">
          {[...Array(5)].map((_, i) => (
            <MaterialIcon key={i} name="star" className="text-[14px]" filled />
          ))}
        </div>
        <blockquote className="testimonial-strip-quote">
          &ldquo;{testimonial.quote}&rdquo;
        </blockquote>
        <div className="testimonial-strip-author">
          <div
            className="testimonial-avatar flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full font-mono text-xs font-bold text-on-primary"
            style={{ background: testimonial.avatarColor }}
            aria-hidden="true"
          >
            {initials}
          </div>
          <div>
            <div className="font-display text-sm text-on-surface">{testimonial.name}</div>
            <div className="font-mono text-[10px] text-on-surface-variant">
              {testimonial.role} · {testimonial.company}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

const Testimonials = () => {
  const items = portfolioData.testimonials;
  const [activeIndex, setActiveIndex] = useState(0);

  const goTo = useCallback(
    (index) => {
      const next = ((index % items.length) + items.length) % items.length;
      setActiveIndex(next);
    },
    [items.length]
  );

  const goNext = useCallback(
    () => setActiveIndex((prev) => (prev + 1) % items.length),
    [items.length]
  );

  const goPrev = useCallback(
    () => setActiveIndex((prev) => (prev - 1 + items.length) % items.length),
    [items.length]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length);
    }, ROTATE_MS);

    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <section className="reveal py-section-gap" id="testimonials">
      <div className="mb-10 flex flex-col items-center text-center">
        <span className="mb-4 font-mono text-label-caps text-primary-container">
          Peer Recognition
        </span>
        <h2 className="mb-6 font-display text-headline-xl-mobile text-on-surface md:text-headline-xl">
          What Colleagues Say
        </h2>
        <div className="h-1 w-24 rounded-full bg-primary-container" />
      </div>

      <div className="testimonials-carousel-strip">
        <button
          type="button"
          className="testimonials-carousel-btn testimonials-carousel-btn--prev"
          onClick={goPrev}
          aria-label="Previous testimonial"
        >
          <MaterialIcon name="chevron_left" />
        </button>

        <div
          className="testimonials-carousel-viewport"
          aria-live="polite"
          aria-roledescription="carousel"
          aria-label="Testimonials"
        >
          <div
            className="testimonials-carousel-track"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {items.map((testimonial) => (
              <TestimonialSlide key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>

        <button
          type="button"
          className="testimonials-carousel-btn testimonials-carousel-btn--next"
          onClick={goNext}
          aria-label="Next testimonial"
        >
          <MaterialIcon name="chevron_right" />
        </button>
      </div>

      <div className="testimonials-carousel-dots">
        {items.map((item, i) => (
          <button
            key={item.id}
            type="button"
            onClick={() => goTo(i)}
            className={`testimonials-carousel-dot ${
              i === activeIndex ? 'testimonials-carousel-dot--active' : ''
            }`}
            aria-label={`Go to testimonial ${i + 1}`}
            aria-current={i === activeIndex ? 'true' : undefined}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
