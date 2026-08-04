'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

import Lightbox from 'yet-another-react-lightbox';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';

import 'yet-another-react-lightbox/styles.css';

import type { Image as WorkImage } from '@/types/portfolio.types';

import css from './Gallery.module.css';

interface Props {
  images: WorkImage[];
}

export default function Gallery({ images }: Props) {
  const [activeImage, setActiveImage] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  useEffect(() => {
    setActiveImage(0);
  }, [images]);

  if (images.length === 0) return null;

  return (
    <>
      <div className={css.gallery}>
        <button
          type="button"
          className={css.mainImage}
          onClick={() => setLightboxOpen(true)}
          aria-label="Відкрити фотографію"
        >
          <Image
            src={images[activeImage].src}
            alt={images[activeImage].alt}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 40vw"
            className={css.image}
          />

          <div className={css.zoom}>
            🔍
          </div>
        </button>

        {images[activeImage].caption && (
          <p className={css.caption}>
            {images[activeImage].caption}
          </p>
        )}

        {images.length > 1 && (
          <div className={css.thumbnails}>
            {images.map((image, index) => (
              <button
                key={image.src}
                type="button"
                onClick={() => setActiveImage(index)}
                className={
                  index === activeImage
                    ? css.activeThumb
                    : css.thumb
                }
                aria-label={`Фото ${index + 1}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="80px"
                  className={css.thumbImage}
                />
              </button>
            ))}
          </div>
        )}
      </div>

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={activeImage}
        plugins={[Zoom]}
        slides={images.map((image) => ({
          src: image.src,
          alt: image.alt,
          description: image.caption,
        }))}
      />
    </>
  );
}