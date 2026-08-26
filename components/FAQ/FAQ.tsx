'use client';

import { useState } from 'react';

import { faqData } from './faqData';
import css from './FAQ.module.css';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <section className={css.faq} id="faq">
      <div className={css.container}>
        <div className={css.header}>

          <h2 className={css.title}>Часті запитання</h2>

          <div className={css.dividerContainer}>
            <hr className={css.divider} />
              <svg className={css.icon_fire}>
                <use href="/icons.svg#icon-fire" />
              </svg>

            <hr className={css.divider} />
          </div>

          <p className={css.description}>
            Відповіді на найпоширеніші запитання про будівництво,
            ремонт та реконструкцію печей, груб, камінів і барбекю-комплексів.
          </p>
        </div>

        <div className={css.list}>
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                className={`${css.item} ${isOpen ? css.open : ''}`}
                key={item.question}
              >
                <button
                  className={css.question}
                  type="button"
                  onClick={() => handleToggle(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span>{item.question}</span>

                  <span className={css.icon} aria-hidden="true">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                <div
                  className={css.answer}
                  id={`faq-answer-${index}`}
                  hidden={!isOpen}
                >
                  <p>{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}