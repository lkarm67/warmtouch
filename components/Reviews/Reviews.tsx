"use client";

import { useEffect, useState } from "react";
import { works } from "../Portfolio/portfolioData";
import css from "./Reviews.module.css";

const COLLAPSED_LENGTH = 250;

export default function Reviews() {
  const reviews = works.flatMap((work) =>
    work.reviews.map((review) => ({
      ...review,
      workTitle: work.title,
    }))
  );

  const [currentSlide, setCurrentSlide] = useState(0);
  const [expandedReview, setExpandedReview] = useState<number | null>(null);
  const [visibleSlides, setVisibleSlides] = useState(1);

  /*
   * Визначаємо кількість відгуків,
   * які показуємо одночасно.
   *
   * mobile  → 1
   * tablet  → 2
   * desktop → усі
   */
  useEffect(() => {
    const updateVisibleSlides = () => {
      if (window.innerWidth >= 1024) {
        setVisibleSlides(reviews.length);
      } else if (window.innerWidth >= 768) {
        setVisibleSlides(2);
      } else {
        setVisibleSlides(1);
      }
    };

    updateVisibleSlides();

    window.addEventListener("resize", updateVisibleSlides);

    return () => {
      window.removeEventListener("resize", updateVisibleSlides);
    };
  }, [reviews.length]);

  /*
   * Кількість реальних позицій слайдера.
   *
   * Наприклад:
   *
   * 3 відгуки / 1 картка → 3 позиції
   * 3 відгуки / 2 картки → 3 позиції
   * 5 відгуків / 2 картки → 5 позицій
   */
  const slideCount =
    visibleSlides >= reviews.length ? 1 : reviews.length;

  /*
   * Якщо при зміні ширини екрана currentSlide
   * став більшим за допустимий — повертаємо його
   * в межі.
   */
  useEffect(() => {
    setCurrentSlide((current) =>
      current >= slideCount ? 0 : current
    );

    setExpandedReview(null);
  }, [slideCount]);

  if (reviews.length === 0) {
    return null;
  }

  const nextSlide = () => {
    setExpandedReview(null);

    setCurrentSlide((current) =>
      current >= slideCount - 1 ? 0 : current + 1
    );
  };

  const prevSlide = () => {
    setExpandedReview(null);

    setCurrentSlide((current) =>
      current === 0 ? slideCount - 1 : current - 1
    );
  };

  /*
   * На десктопі слайдер не потрібен.
   */
  const isDesktop = visibleSlides >= reviews.length;

  /*
   * Ширина одного кроку.
   *
   * На mobile:
   * 1 картка → 100%
   *
   * На tablet:
   * 2 картки + gap → приблизно 50%
   */
  const slideWidth =
    visibleSlides === 1 ? 100 : 50;

  /*
   * Для tablet:
   *
   * 1 → показуємо 1-2
   * 2 → показуємо 2-3
   * 3 → показуємо 3-4
   *
   * Останній крок повертається до початку.
   */
  const translateX =
    visibleSlides === 1
      ? currentSlide * 100
      : currentSlide * (slideWidth + 1.25);

  return (
    <section className={css.reviews} id="reviews">
      <div className={css.container}>
        <div className={css.header}>
          <h2 className={css.title}>Відгуки клієнтів</h2>
        

          <div className={css.dividerContainer}>
            <hr className={css.divider} />
              <svg className={css.icon_fire}>
                <use href="/icons.svg#icon-fire" />
              </svg>

            <hr className={css.divider} />
          </div>

          <p className={css.subtitle}>
            Дякую своїм клієнтам за довіру та щирі відгуки про мою роботу.
          </p>
        </div>

        <div className={css.slider}>
          {!isDesktop && (
            <button
              className={`${css.arrow} ${css.prev}`}
              type="button"
              onClick={prevSlide}
              aria-label="Попередні відгуки"
            >
              <span className={css.arrowIcon} aria-hidden="true" />
            </button>
          )}

          <div className={css.viewport}>
            <div
              className={css.list}
              style={
                {
                  "--translate-x": `${translateX}%`,
                  "--visible-slides": visibleSlides,
                } as React.CSSProperties
              }
            >
              {reviews.map((review, index) => {
                const isLong =
                  review.text.length > COLLAPSED_LENGTH;

                const isExpanded =
                  expandedReview === index;

                return (
                  <article
                    className={css.card}
                    key={`${review.author}-${review.date}-${index}`}
                  >
                    {review.rating && (
                      <div
                        className={css.rating}
                        aria-label={`Оцінка ${review.rating} з 5`}
                      >
                        {"★".repeat(review.rating)}
                        {"☆".repeat(5 - review.rating)}
                      </div>
                    )}

                    <div
                      className={`${css.textWrapper} ${
                        isExpanded ? css.expanded : ""
                      }`}
                    >
                      <p className={css.text}>
                        {review.text}
                      </p>
                    </div>

                    {isLong && (
                      <button
                        type="button"
                        className={css.moreButton}
                        onClick={() =>
                          setExpandedReview(
                            isExpanded ? null : index
                          )
                        }
                      >
                        {isExpanded
                          ? "Сховати"
                          : "Читати більше"}
                      </button>
                    )}

                    <div className={css.author}>
                      <strong>{review.author}</strong>

                      {review.date && (
                        <time dateTime={review.date}>
                          {new Date(
                            review.date
                          ).toLocaleDateString("uk-UA")}
                        </time>
                      )}
                    </div>

                    <div className={css.work}>
                      <span>Відгук про роботу:</span>
                      <strong>{review.workTitle}</strong>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          {!isDesktop && (
            <button
              className={`${css.arrow} ${css.next}`}
              type="button"
              onClick={nextSlide}
              aria-label="Наступні відгуки"
            >
              <span className={`${css.arrowIcon} ${css.arrowIconNext}`} aria-hidden="true" />
            </button>
          )}
        </div>

        {!isDesktop && slideCount > 1 && (
          <div className={css.dots}>
            {Array.from({ length: slideCount }).map(
              (_, index) => (
                <button
                  key={index}
                  type="button"
                  className={`${css.dot} ${
                    index === currentSlide
                      ? css.dotActive
                      : ""
                  }`}
                  onClick={() => {
                    setExpandedReview(null);
                    setCurrentSlide(index);
                  }}
                  aria-label={`Перейти до позиції ${
                    index + 1
                  }`}
                />
              )
            )}
          </div>
        )}
      </div>
    </section>
  );
}