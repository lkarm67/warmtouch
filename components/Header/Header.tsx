"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import css from "./Header.module.css";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const closeMenu = () => setIsMenuOpen(false);

    return (
        <header className={css.header}>
            <div className={css.container}>
            {/* LOGO */}
            <Link href="/" className={css.logo} onClick={closeMenu}>
                <Image
                    src="/images/logo_td_3.jpg"
                    alt="Теплий Дотик"
                    width={240}
                    height={75}
                />
            </Link>

            {/* BURGER */}
            <button
                type="button"
                className={`${css.burger} ${isMenuOpen ? css.burgerOpen : ""}`}
                onClick={() => setIsMenuOpen((prev) => !prev)}
                aria-label={isMenuOpen ? "Закрити меню" : "Відкрити меню"}
                aria-expanded={isMenuOpen}
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

            {/* NAVIGATION */}
            <nav className={`${css.nav} ${isMenuOpen ? css.navOpen : ""}`}>
                <ul className={css.navList}>
                    <li className={css.navItem}>
                        <Link
                            href="/"
                            className={css.navLink}
                            onClick={closeMenu}
                        >
                            Головна
                        </Link>
                    </li>

                    <li className={css.navItem}>
                        <Link
                            href="#about"
                            className={css.navLink}
                            onClick={closeMenu}
                        >
                            Про мене
                        </Link>
                    </li>

                    <li className={css.navItem}>
                        <Link
                            href="#services"
                            className={css.navLink}
                            onClick={closeMenu}
                        >
                            Послуги
                        </Link>
                    </li>

                    <li className={css.navItem}>
                        <Link
                            href="#portfolio"
                            className={css.navLink}
                            onClick={closeMenu}
                        >
                            Роботи
                        </Link>
                    </li>

                    <li className={css.navItem}>
                        <Link
                            href="#faq"
                            className={css.navLink}
                            onClick={closeMenu}
                        >
                            Питання
                        </Link>
                    </li>

                    <li className={css.navItem}>
                        <Link
                            href="#reviews"
                            className={css.navLink}
                            onClick={closeMenu}
                        >
                            Відгуки
                        </Link>
                    </li>

                    <li className={css.navItem}>
                        <Link
                            href="#contacts"
                            className={css.navLink}
                            onClick={closeMenu}
                        >
                            Контакти
                        </Link>
                    </li>

                    {/* CTA для мобільного меню */}
                    <li className={css.mobileCta}>
                        <Link
                            className={css.ctaBtn}
                            href="https://wa.me/380931508593"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={closeMenu}
                        >
                            Зв'язатися
                        </Link>
                    </li>
                </ul>
            </nav>

            {/* CTA для desktop */}
            <Link
                className={css.ctaBtnDesktop}
                href="https://wa.me/380931508593"
                target="_blank"
                rel="noopener noreferrer"
            >
                Зв'язатися
            </Link>
            </div>
        </header>
    );
}