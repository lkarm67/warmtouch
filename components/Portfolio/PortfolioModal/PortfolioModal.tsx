'use client';

import { useEffect, useRef } from 'react';

import type { Work } from '@/types/portfolio.types';

import css from './PortfolioModal.module.css';

import Gallery from './Gallery';
import ModalSection from './ModalSection';
import InfoList from './InfoList';
import Specifications from './Specifications';
import Benefits from './Benefits';

import {
  getFeatureNames,
  getCapabilityNames,
  getFuelNames,
  getMaterialNames,
  getMasterRoleNames,
  getProjectTypeName,
  getPurposeNames,
} from '@/lib/portfolio.helpers';

interface Props {
  work: Work | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function PortfolioModal({
  work,
  isOpen,
  onClose,
}: Props) {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    if (!isOpen) {
      html.style.overflow = '';
      body.style.overflow = '';
      return;
    }

    html.style.overflow = 'hidden';
    body.style.overflow = 'hidden';

    contentRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (!contentRef.current) return;

      switch (event.key) {
        case 'ArrowDown':
          event.preventDefault();
          contentRef.current.scrollTop += 60;
          break;

        case 'ArrowUp':
          event.preventDefault();
          contentRef.current.scrollTop -= 60;
          break;

        case 'PageDown':
          event.preventDefault();
          contentRef.current.scrollTop +=
            contentRef.current.clientHeight * 0.9;
          break;

        case 'PageUp':
          event.preventDefault();
          contentRef.current.scrollTop -=
            contentRef.current.clientHeight * 0.9;
          break;

        case 'Home':
          event.preventDefault();
          contentRef.current.scrollTop = 0;
          break;

        case 'End':
          event.preventDefault();
          contentRef.current.scrollTop =
            contentRef.current.scrollHeight;
          break;

        case 'Escape':
          onClose();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      html.style.overflow = '';
      body.style.overflow = '';

      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !work) return null;

  return (
    <div
      className={css.backdrop}
      onClick={onClose}
    >
      <div
        className={css.modal}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className={css.close}
          onClick={onClose}
          aria-label="Закрити"
        >
          ✕
        </button>

        <div className={css.left}>
          <Gallery images={work.images} />
        </div>

        <div
          ref={contentRef}
          className={css.content}
          tabIndex={-1}
        >
          <h2>{work.title}</h2>

          {work.subtitle && (
            <p className={css.subtitle}>
              {work.subtitle}
            </p>
          )}

          {work.description && (
            <p className={css.description}>
              {work.description}
            </p>
          )}

          <div className={css.sections}>

            {work.clientTask && (
              <ModalSection title="Завдання">
                <p>{work.clientTask}</p>
              </ModalSection>
            )}

            {work.solution && (
              <ModalSection title="Реалізація">
                <p>{work.solution}</p>
              </ModalSection>
            )}

            <ModalSection title="Характеристики">
              <Specifications
                specification={work.specifications}
              />
            </ModalSection>

            <ModalSection title="Переваги">
              <Benefits benefits={work.benefits} />
            </ModalSection>

            {work.features?.length > 0 && (
              <ModalSection title="Особливості">
                <InfoList
                  items={getFeatureNames(work.features)}
                  variant="badges"
                />
              </ModalSection>
            )}

            {work.capabilities?.length > 0 && (
              <ModalSection title="Можливості">
                <InfoList
                  items={getCapabilityNames(work.capabilities)}
                />
              </ModalSection>
            )}

            {work.materials?.length > 0 && (
              <ModalSection title="Матеріали">
                <InfoList
                  items={getMaterialNames(work.materials)}
                />
              </ModalSection>
            )}

            {work.fuels?.length > 0 && (
              <ModalSection title="Паливо">
                <InfoList
                  items={getFuelNames(work.fuels)}
                />
              </ModalSection>
            )}

            {work.purposes?.length > 0 && (
              <ModalSection title="Призначення">
                <InfoList
                  items={getPurposeNames(work.purposes)}
                />
              </ModalSection>
            )}

            <ModalSection title="Участь майстра">
              <dl className={css.contribution}>
                <dt>Тип проєкту</dt>
                  <dd>
                    {getProjectTypeName(work.contribution.projectType)}
                  </dd>

                  {work.contribution.roles.length > 0 && (
                    <>
                      <dt>Роль майстра</dt>
                        <dd>
                          <InfoList
                            items={getMasterRoleNames(
                              work.contribution.roles
                            )}
                            variant="badges"
                          />
                        </dd>
                    </>
                  )}

                  {work.contribution.note && (
                    <>
                      <dt>Примітка</dt>
                        <dd>{work.contribution.note}</dd>
                    </>
                  )}
              </dl>
            </ModalSection>

            {work.reviews?.length > 0 && (
              <ModalSection title="Відгуки">
                <div className={css.reviews}>
                  {work.reviews.map((review, index) => (
                    <article
                      className={css.review}
                      key={`${review.author}-${review.date ?? index}`}
                    >
                      <div className={css.reviewHeader}>
                        <strong className={css.author}>{review.author}</strong>

                        {review.rating && (
                          <span className={css.rating}>
                            ★ {review.rating}/5
                          </span>
                        )}
                      </div>

                      <p>{review.text}</p>

                      {review.date && (
                        <time>{review.date}</time>
                      )}
                    </article>
                  ))}
                </div>
              </ModalSection>
            )}
          </div>        
        </div>
      </div>
    </div>
  );
}