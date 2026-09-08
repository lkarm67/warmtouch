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

const messengers = [
    'WhatsApp',
    'Telegram',
    'Viber',
];

type FieldErrors = {
    name: string;
    phone: string;
    messenger: string;
    service: string;
};

export default function ContactForm() {
    const [isSending, setIsSending] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');

    const [fieldErrors, setFieldErrors] = useState<FieldErrors>({
        name: '',
        phone: '',
        messenger: '',
        service: '',
    });

    function validateForm(formData: FormData): FieldErrors {
        const name = String(formData.get('name') ?? '').trim();
        const phone = String(formData.get('phone') ?? '').trim();
        const messenger = String(formData.get('messenger') ?? '').trim();
        const service = String(formData.get('service') ?? '');

        const errors: FieldErrors = {
            name: '',
            phone: '',
            messenger: '',
            service: '',
        };

        // Ім'я
        if (!name) {
            errors.name = "Введіть ваше ім'я";
        } else if (name.length < 2) {
            errors.name = "Ім'я має містити щонайменше 2 символи";
        }

        // Телефон
        if (!phone) {
            errors.phone = 'Введіть номер телефону';
        } else {
            const phoneDigits = phone.replace(/\D/g, '');

            if (phoneDigits.length < 10) {
                errors.phone = 'Введіть коректний номер телефону';
            }
        }

        // Месенджер
        if (!messenger) {
            errors.messenger = 'Оберіть месенджер для зв’язку';
        }

        // Послуга
        if (!service) {
            errors.service = 'Оберіть послугу';
        }

        return errors;
    }

    function clearFieldError(field: keyof FieldErrors) {
        setFieldErrors((prev) => ({
            ...prev,
            [field]: '',
        }));
    }

    async function handleSubmit(
        event: React.SyntheticEvent<HTMLFormElement>
    ) {
        event.preventDefault();

        setSuccess(false);
        setError('');

        const form = event.currentTarget;
        const formData = new FormData(form);

        const errors = validateForm(formData);

        setFieldErrors(errors);

        const hasErrors = Object.values(errors).some(Boolean);

        if (hasErrors) {
            return;
        }

        setIsSending(true);

        const data = {
            name: String(formData.get('name') ?? '').trim(),
            phone: String(formData.get('phone') ?? '').trim(),
            messenger: String(formData.get('messenger') ?? ''),
            service: String(formData.get('service') ?? ''),
            location: String(formData.get('location') ?? '').trim(),
            message: String(formData.get('message') ?? '').trim(),
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

            setFieldErrors({
                name: '',
                phone: '',
                messenger: '',
                service: '',
            });

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
        <section className={css.section} id="contacts">
            <div className={css.container}>

                <div className={css.header}>
                    <p className={css.subtitle}>
                        Зв'яжіться з майстром
                    </p>

                    <h2 className={css.title}>
                        Залишити заявку
                    </h2>

                    <div className={css.dividerContainer}>
                        <hr className={css.divider} />

                        <svg className={css.icon_fire}>
                            <use href="/icons.svg#icon-fire"></use>
                        </svg>

                        <hr className={css.divider} />
                    </div>

                    <p className={css.description}>
                        Опишіть ваше замовлення, і майстер зв'яжеться
                        з вами для обговорення деталей.
                    </p>
                </div>

                <form
                    className={css.form}
                    onSubmit={handleSubmit}
                    noValidate
                >

                    {/* Ім'я */}
                    <div className={css.field}>
                        <label htmlFor="name">
                            Ваше ім'я <span>*</span>
                        </label>

                        <div
                            className={`${css.inputWrapper} ${
                                fieldErrors.name ? css.inputError : ''
                            }`}
                        >
                            <input
                                id="name"
                                name="name"
                                type="text"
                                placeholder="Ваше ім'я"
                                autoComplete="name"
                                onChange={() =>
                                    clearFieldError('name')
                                }
                                aria-invalid={!!fieldErrors.name}
                                aria-describedby={
                                    fieldErrors.name
                                        ? 'name-error'
                                        : undefined
                                }
                            />

                            <svg className={css.inputIcon}>
                                <use href="/icons.svg#icon-user"></use>
                            </svg>
                        </div>

                        {fieldErrors.name && (
                            <p
                                className={css.fieldError}
                                id="name-error"
                            >
                                {fieldErrors.name}
                            </p>
                        )}
                    </div>

                    {/* Телефон */}
                    <div className={css.field}>
                        <label htmlFor="phone">
                            Ваш номер для зв'язку <span>*</span>
                        </label>

                        <div
                            className={`${css.inputWrapper} ${
                                fieldErrors.phone ? css.inputError : ''
                            }`}
                        >
                            <input
                                id="phone"
                                name="phone"
                                type="tel"
                                placeholder="+380..."
                                autoComplete="tel"
                                onChange={() =>
                                    clearFieldError('phone')
                                }
                                aria-invalid={!!fieldErrors.phone}
                                aria-describedby={
                                    fieldErrors.phone
                                        ? 'phone-error'
                                        : undefined
                                }
                            />

                            <svg className={css.inputIcon}>
                                <use href="/icons.svg#icon-phone"></use>
                            </svg>
                        </div>

                        {fieldErrors.phone && (
                            <p
                                className={css.fieldError}
                                id="phone-error"
                            >
                                {fieldErrors.phone}
                            </p>
                        )}
                    </div>

                    {/* Месенджер */}
                    <div className={`${css.field} ${css.fullWidth}`}>
                        <fieldset
                            className={`${css.messengerField} ${
                                fieldErrors.messenger
                                ? css.messengerError
                                : ''
                            }`}
                        >
                            <legend>
                                Через який месенджер вам зручно спілкуватися?{' '}
                                    <span>*</span>
                            </legend>

                            <div className={css.messengerOptions}>
                                {messengers.map((messenger) => (
                                    <label
                                        key={messenger}
                                        className={css.messengerOption}
                                    >
                                        <input
                                            type="radio"
                                            name="messenger"
                                            value={messenger}
                                            onChange={() =>
                                                clearFieldError('messenger')
                                            }
                                            aria-invalid={!!fieldErrors.messenger}
                                        />

                                        <span className={css.radioCircle}></span>

                                        <span>{messenger}</span>
                                    </label>
                                ))}
                            </div>
                        </fieldset>

                        {fieldErrors.messenger && (
                            <p
                                className={css.fieldError}
                                id="messenger-error"
                            >
                                {fieldErrors.messenger}
                            </p>
                        )}
                    </div>

                    {/* Послуга */}
                    <div className={css.field}>
                        <label htmlFor="service">
                            Що вас цікавить? <span>*</span>
                        </label>

                        <div
                            className={`${css.inputWrapper} ${
                                fieldErrors.service ? css.inputError : ''
                            }`}
                        >
                            <select
                                id="service"
                                name="service"
                                defaultValue=""
                                onChange={() =>
                                    clearFieldError('service')
                                }
                                aria-invalid={!!fieldErrors.service}
                                aria-describedby={
                                    fieldErrors.service
                                        ? 'service-error'
                                        : undefined
                                }
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

                            <svg className={css.inputIcon}>
                                <use href="/icons.svg#icon-fire"></use>
                            </svg>
                        </div>

                        {fieldErrors.service && (
                            <p
                                className={css.fieldError}
                                id="service-error"
                            >
                                {fieldErrors.service}
                            </p>
                        )}
                    </div>

                    {/* Населений пункт */}
                    <div className={css.field}>
                        <label htmlFor="location">
                            Населений пункт
                        </label>

                        <div className={css.inputWrapper}>
                            <input
                                id="location"
                                name="location"
                                type="text"
                                placeholder="Наприклад, Чернівці"
                                autoComplete="address-level2"
                            />

                            <svg className={css.inputIcon}>
                                <use href="/icons.svg#icon-location"></use>
                            </svg>
                        </div>
                    </div>

                    {/* Повідомлення */}
                    <div
                        className={`${css.field} ${css.fullWidth}`}
                    >
                        <label htmlFor="message">
                            Розкажіть про ваше замовлення
                        </label>

                        <div className={css.inputWrapper}>
                            <textarea
                                id="message"
                                name="message"
                                rows={5}
                                placeholder="Коротко опишіть, що ви хотіли б замовити..."
                            />

                            <svg
                                className={`${css.inputIcon} ${css.textareaIcon}`}
                            >
                                <use href="/icons.svg#icon-pencil"></use>
                            </svg>
                        </div>
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

                    {success && (
                        <p className={css.success}>
                            Дякуємо за звернення! Вашу заявку отримано.
                            Майстер зв'яжеться з вами найближчим часом.
                        </p>
                    )}

                    {error && (
                        <p className={css.error}>
                            {error}
                        </p>
                    )}

                </form>

                <div className={css.afterFormBox}>

                    <p className={css.description2}>
                        Або напишіть майстру напряму
                    </p>
                
                    <div className={css.contacts}>

                        <a
                            className={css.contactButton}
                            href="https://t.me/lkarm67"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div
                                className={`${css.contactButtonIcon} ${css.telegramIcon}`}
                            >
                                <svg className={css.messenger}>
                                    <use href="/icons.svg#icon-telegram"></use>
                                </svg>
                            </div>

                            <div className={css.contactButtonText}>
                                <p className={css.contactButtonTitle}>
                                    Telegram
                                </p>

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
                            <div
                                className={`${css.contactButtonIcon} ${css.viberIcon}`}
                            >
                                <svg className={css.messenger}>
                                    <use href="/icons.svg#icon-viber"></use>
                                </svg>
                            </div>

                            <div className={css.contactButtonText}>
                                <p className={css.contactButtonTitle}>
                                    Viber
                                </p>

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
                            <div
                                className={`${css.contactButtonIcon} ${css.whatsappIcon}`}
                            >
                                <svg className={css.messenger}>
                                    <use href="/icons.svg#icon-whatsapp"></use>
                                </svg>
                            </div>

                            <div className={css.contactButtonText}>
                                <p className={css.contactButtonTitle}>
                                    WhatsApp
                                </p>

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

                        <p className={css.description3}>
                            Швидко. Зручно. Відповідаю особисто.
                        </p>
                    </div>
                </div>  
            </div>
        </section>
    );
}
