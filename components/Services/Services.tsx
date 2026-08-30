'use client';
 
import { useEffect, useState } from 'react';
import Image from 'next/image';
import css from './Services.module.css';
import { servicesData, type Service } from './servicesData';
 
export default function Services() {
  const [activeService, setActiveService] = useState<Service | null>(null);

  useEffect(() => {
    if (!activeService) return;

    const scrollY = window.scrollY;

    const html = document.documentElement;
    const body = document.body;

    body.style.position = 'fixed';
    body.style.top = `-${scrollY}px`;
    body.style.left = '0';
    body.style.right = '0';

    return () => {
      body.style.position = '';
      body.style.top = '';
      body.style.left = '';
      body.style.right = '';
      body.style.overflow = '';

      html.style.overflow = '';

      window.scrollTo(0, scrollY);
    };
  }, [activeService]);
 
  const openModal = (service: Service) => setActiveService(service);
  const closeModal = () => setActiveService(null);
 
  return (
    <section className={css.services + ' container'}>
      <h2 className={css.title}>Послуги</h2>
 
      <div className={css.dividerContainer}>
        <hr className={css.divider} />
        <svg className={css.icon_fire}>
          <use href="/icons.svg#icon-fire"></use>
        </svg>
        <hr className={css.divider} />
      </div>
 
      <div className={css.servicesList}>
        {servicesData.map((service) => (
          <div className={css.serviceItem} key={service.id}>
            <Image
              src={service.image}
              alt={service.title}
              width={776}
              height={908}
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
              className={css.serviceImage}
            />
            <h3 className={css.serviceTitle}>{service.title}</h3>
            <p className={css.serviceDescription}>{service.shortDescription}</p>
            <button
              type="button"
              className={css.detailsButton}
              onClick={() => openModal(service)}
            >
              Детальніше
            </button>
          </div>
        ))}
      </div>
 
      {activeService && (
        <div
          className={css.modalOverlay}
          onClick={closeModal}
          role="presentation"
        >
          <div
            className={css.modal}
            role="dialog"
            aria-modal="true"
            aria-labelledby="service-modal-title"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className={css.closeButton}
              onClick={closeModal}
              aria-label="Закрити"
            >
              ✕
            </button>
 
            <Image
              src={activeService.imageModal ?? activeService.image}
              alt={activeService.title}
              width={776}
              height={908}
              className={css.modalImage}
            />
 
            <h3 id="service-modal-title" className={css.modalTitle}>
              {activeService.title}
            </h3>
 
            <p className={css.modalText}>{activeService.fullDescription}</p>
 
            <h4 className={css.modalSubtitle}>Що входить</h4>
            <ul className={css.modalList}>
              {activeService.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
 
            <h4 className={css.modalSubtitle}>Етапи робіт</h4>
            <ol className={css.modalList}>
              {activeService.workStages.map((stage, idx) => (
                <li key={idx}>{stage}</li>
              ))}
            </ol>
 
            <div className={css.modalMeta}>
              <p>
                <strong>Терміни:</strong> {activeService.duration}
              </p>
              <p>
                <strong>Гарантія:</strong> {activeService.warranty}
              </p>
            </div>
 
            <a href="#contacts" className={css.modalCta} onClick={closeModal}>
              Замовити консультацію
            </a>
          </div>
        </div>
      )}
    </section>
  );
};
 



