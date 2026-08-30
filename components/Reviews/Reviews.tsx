"use client";

import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { works } from "../Portfolio/portfolioData";
import css from "./Reviews.module.css";

export default function Reviews() {
  const reviews = works.flatMap((work) =>
    work.reviews.map((review) => ({
      ...review,
      workTitle: work.title,
      workSlug: work.slug,
    }))
  );

  const [currentSlide, setCurrentSlide] = useState(0);
  const [expandedReview, setExpandedReview] = useState<number | null>(null);
  const [visibleSlides, setVisibleSlides] = useState(1);
  const [longReviews, setLongReviews] = useState<boolean[]>([]);

  const textRefs = useRef<(HTMLDivElement | null)[]>([]);

  /* ==================================================
     КІЛЬКІСТЬ КАРТОК НА ЕКРАНІ
     
     mobile  → 1
     tablet  → 2
     desktop → 3
     ================================================== */

  useEffect(() => {
    const updateVisibleSlides = () => {
      if (window.innerWidth >= 1024) {
        setVisibleSlides(3);
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
  }, []);

  if (reviews.length === 0) {
    return null;
  }

  const slideCount = reviews.length;

  /*
   * Остання можлива позиція слайдера.
   *
   * Наприклад:
   * 4 відгуки + 3 картки на екрані
   * → остання позиція = 1
   *
   * 4 відгуки + 2 картки
   * → остання позиція = 2
   *
   * 4 відгуки + 1 картка
   * → остання позиція = 3
   */
  const maxSlide = Math.max(
    0,
    slideCount - visibleSlides
  );

  /* ==================================================
     ПЕРЕВІРКА, ЧИ ТЕКСТ ДІЙСНО ОБРІЗАНИЙ
     ================================================== */

  const checkLongReviews = () => {
    const result = reviews.map((_, index) => {
      const element = textRefs.current[index];

      if (!element) {
        return false;
      }

      return element.scrollHeight > element.clientHeight + 1;
    });

    setLongReviews(result);
  };

  /*
   * Перевіряємо текст після зміни ширини
   * та кількості карток.
   */

  useLayoutEffect(() => {
    const frame = requestAnimationFrame(() => {
      checkLongReviews();
    });

    return () => cancelAnimationFrame(frame);
  }, [visibleSlides, reviews.length]);

  /* ==================================================
     ЗМІНА РОЗМІРУ ЕКРАНУ
     ================================================== */

  useEffect(() => {
    const handleResize = () => {
      setCurrentSlide(0);
      setExpandedReview(null);

      requestAnimationFrame(() => {
        checkLongReviews();
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  /* ==================================================
     SLIDER
     ================================================== */

  const nextSlide = () => {
    setExpandedReview(null);

    setCurrentSlide((current) =>
      Math.min(current + 1, maxSlide)
    );
  };

  const prevSlide = () => {
    setExpandedReview(null);

    setCurrentSlide((current) =>
      Math.max(current - 1, 0)
    );
  };

  /*
   * При зміні кількості карток на екрані
   * повертаємося на перший слайд.
   */

  useEffect(() => {
    setCurrentSlide(0);
    setExpandedReview(null);
  }, [visibleSlides]);

  return (
    <section className={css.reviews} id="reviews">
      <div className={css.container}>

        {/* ==================================================
            HEADER
           ================================================== */}

        <div className={css.header}>
          <h2 className={css.title}>
            Відгуки клієнтів
          </h2>

          <div className={css.dividerContainer}>
            <hr className={css.divider} />

            <svg
              className={css.icon_fire}
              aria-hidden="true"
            >
              <use href="/icons.svg#icon-fire" />
            </svg>

            <hr className={css.divider} />
          </div>

          <p className={css.subtitle}>
            Дякую своїм клієнтам за довіру та щирі відгуки
            про мою роботу.
          </p>
        </div>

        {/* ==================================================
            SLIDER
           ================================================== */}

        <div className={css.slider}>

          <button
            className={`${css.arrow} ${css.prev}`}
            type="button"
            onClick={prevSlide}
            disabled={currentSlide === 0}
            aria-label="Попередні відгуки"
          >
            <span
              className={css.arrowIcon}
              aria-hidden="true"
            />
          </button>

          <div className={css.viewport}>
            <div
              className={css.list}
              style={
                {
                  "--current-slide": currentSlide,
                  "--visible-slides": visibleSlides,
                } as React.CSSProperties
              }
            >
              {reviews.map((review, index) => {
                const isLong =
                  longReviews[index] ?? false;

                const isExpanded =
                  expandedReview === index;

                return (
                  <article
                    className={css.card}
                    key={`${review.author}-${review.date}-${index}`}
                  >

                    {/* RATING */}

                    {review.rating && (
                      <div
                        className={css.rating}
                        aria-label={`Оцінка ${review.rating} з 5`}
                      >
                        {"★".repeat(review.rating)}
                        {"☆".repeat(5 - review.rating)}
                      </div>
                    )}

                    {/* TEXT */}

                    <div
                      ref={(element) => {
                        textRefs.current[index] = element;
                      }}
                      className={`${css.textWrapper} ${
                        isExpanded ? css.expanded : ""
                      }`}
                    >
                      <p className={css.text}>
                        {review.text}
                      </p>
                    </div>

                    {/* MORE */}

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

                    {/* AUTHOR */}

                    <div className={css.author}>
                      <strong>
                        {review.author}
                      </strong>

                      {review.date && (
                        <time dateTime={review.date}>
                          {new Date(
                            review.date
                          ).toLocaleDateString("uk-UA")}
                        </time>
                      )}
                    </div>

                    {/* WORK */}

                    <div className={css.work}>
                      <span>
                        Відгук про роботу:
                      </span>

                      <button
                        type="button"
                        className={css.workLink}
                        onClick={() => {
                          const event = new CustomEvent(
                            "open-portfolio-work",
                            {
                              detail: {
                                slug: review.workSlug,
                              },
                            },
                          );

                          window.dispatchEvent(event);
                        }}
                      >
                        <strong>
                          {review.workTitle}
                        </strong>
                      </button>
                    </div>

                  </article>
                );
              })}
            </div>
          </div>

          <button
            className={`${css.arrow} ${css.next}`}
            type="button"
            onClick={nextSlide}
            disabled={currentSlide >= maxSlide}
            aria-label="Наступні відгуки"
          >
            <span
              className={`${css.arrowIcon} ${css.arrowIconNext}`}
              aria-hidden="true"
            />
          </button>

        </div>

        {/* ==================================================
            DOTS
           ================================================== */}

        {slideCount > visibleSlides && (
          <div className={css.dots}>
            {Array.from(
              { length: maxSlide + 1 },
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
                  aria-label={`Перейти до групи відгуків ${
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