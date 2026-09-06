'use client';

import React, { useState } from 'react';
import css from './ContactForm.module.css';

const services = [
'Піч',
'Груба',
'Камін',
'Барбекю-комплекс',
'Інше',
];

export default function ContactForm() {
const [isSending, setIsSending] = useState(false);
const [success, setSuccess] = useState(false);
const [error, setError] = useState('');

async function handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();

    setIsSending(true);
    setSuccess(false);
    setError('');

    const form = event.currentTarget;
    const formData = new FormData(form);

    const data = {
        name: formData.get('name'),
        phone: formData.get('phone'),
        service: formData.get('service'),
        location: formData.get('location'),
        message: formData.get('message'),
    };

    try {
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error('Помилка відправки');
        }

        form.reset();
        setSuccess(true);

        setTimeout(() => {
          setSuccess(false);
        }, 5000);

    } catch {
        setError(
            'Не вдалося надіслати заявку. Спробуйте ще раз.'
        );
    } finally {
        setIsSending(false);
    }
}

return (
    <section className={css.section} id="contact-form">
        <div className={css.container}>
            <div className={css.header}>
                <p className={css.subtitle}>Зв'яжіться з майстром</p>

                <h2 className={css.title}>
                    Залишити заявку
                </h2>

                <div className={css.dividerContainer}>
                    <hr className={css.divider}/>
                        <svg className={css.icon_fire}>
                            <use href="/icons.svg#icon-fire"></use>
                        </svg> 
                    <hr className={css.divider}/>
                </div>

                <p className={css.description}>
                    Опишіть ваше замовлення, і майстер зв'яжеться
                    з вами для обговорення деталей.
                </p>
                <p className={css.description2}>Або зв'яжіться напряму</p>
            </div>

            <div className={css.contacts}>
                <a
                    className={css.contactButton}
                    href="https://t.me/lkarm67"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div className={`${css.contactButtonIcon} ${css.telegramIcon}`}>
                        <svg className={css.messenger}>
                            <use href="/icons.svg#icon-telegram"></use>
                        </svg>
                    </div>

                    <div className={css.contactButtonText}>
                        <p className={css.contactButtonTitle}>Telegram</p>
                        <p className={css.contactButtonSubtitle}>
                            Написати в Telegram
                        </p>
                    </div>
                </a>

                <a
                    className={css.contactButton}
                    href="viber://chat?number=%2B380931508593"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div className={`${css.contactButtonIcon} ${css.viberIcon}`}>
                        <svg className={css.messenger}>
                            <use href="/icons.svg#icon-viber"></use>
                        </svg>
                    </div>

                    <div className={css.contactButtonText}>
                        <p className={css.contactButtonTitle}>Viber</p>
                        <p className={css.contactButtonSubtitle}>
                            Написати у Viber
                        </p>
                    </div>
                </a>

                <a
                    className={css.contactButton}
                    href="https://wa.me/380931508593"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div className={`${css.contactButtonIcon} ${css.whatsappIcon}`}>
                        <svg className={css.messenger}>
                            <use href="/icons.svg#icon-whatsapp"></use>
                        </svg>
                    </div>

                    <div className={css.contactButtonText}>
                        <p className={css.contactButtonTitle}>WhatsApp</p>
                        <p className={css.contactButtonSubtitle}>
                            Написати у WhatsApp
                        </p>
                    </div>
                </a>
            </div>
            
            <div className={css.afterContactButtonBox}>
                <svg className={css.iconShield}>
                    <use href="/icons.svg#icon-shield1"></use>
                </svg>
                <p className={css.description2}>Швидко. Зручно. Відповідаю особисто.</p>
            </div>

            <form
                className={css.form}
                onSubmit={handleSubmit}
            >
                <div className={css.field}>
                    <label htmlFor="name">
                        Ваше ім'я <span>*</span>
                    </label>

                    <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Ваше ім'я"
                        required
                    />
                </div>

                <div className={css.field}>
                    <label htmlFor="phone">
                        Номер телефону <span>*</span>
                    </label>

                    <input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+380..."
                        required
                    />
                </div>

                <div className={css.field}>
                    <label htmlFor="service">
                        Що вас цікавить? <span>*</span>
                    </label>

                    <select
                        id="service"
                        name="service"
                        defaultValue=""
                        required
                    >
                        <option value="" disabled>
                            Оберіть послугу
                        </option>

                        {services.map((service) => (
                            <option
                                key={service}
                                value={service}
                            >
                                {service}
                            </option>
                        ))}
                    </select>
                </div>

                <div className={css.field}>
                    <label htmlFor="location">
                        Населений пункт
                    </label>

                    <input
                        id="location"
                        name="location"
                        type="text"
                        placeholder="Наприклад, Чернівці"
                    />
                </div>

                <div className={`${css.field} ${css.fullWidth}`}>
                    <label htmlFor="message">
                        Розкажіть про ваше замовлення
                    </label>

                    <textarea
                        id="message"
                        name="message"
                        rows={5}
                        placeholder="Коротко опишіть, що ви хотіли б замовити..."
                    />
                </div>

                <button
                    className={css.submit}
                    type="submit"
                    disabled={isSending}
                >
                    {isSending
                        ? 'Надсилання...'
                        : 'Надіслати заявку'}
                </button>

                {success ? (
                    <p className={css.success}>
                        Дякуємо за звернення! Вашу заявку отримано.
                        Майстер зв'яжеться з вами найближчим часом.
                    </p>
                ) : null}

                {error && (
                    <p className={css.error}>
                        {error}
                    </p>
                )}
            </form>
        </div>
    </section>
);

}
