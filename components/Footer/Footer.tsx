import Link from "next/link";
import Image from "next/image";

import css from "./Footer.module.css";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={css.footer}>
            <div className={css.container}>

                <div className={css.content}>

                    {/* LOGO */}
                    <Link href="/" className={css.logo}>
                        <Image
                            src="/images/logo_td_3.jpg"
                            alt="Теплий Дотик"
                            width={240}
                            height={75}
                        />
                    </Link>

                    {/* SOCIALS */}
                    <div className={css.socials}>

                        <a
                            className={css.socialLink}
                            href="https://t.me/lkarm67"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Telegram"
                        >
                            <svg className={css.messenger}>
                                <use href="/icons.svg#icon-telegram" />
                            </svg>
                        </a>

                        <a
                            className={css.socialLink}
                            href="viber://chat?number=%2B380931508593"
                            aria-label="Viber"
                        >
                            <svg className={css.messenger}>
                                <use href="/icons.svg#icon-viber" />
                            </svg>
                        </a>

                        <a
                            className={css.socialLink}
                            href="https://wa.me/380931508593"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="WhatsApp"
                        >
                            <svg className={css.messenger}>
                                <use href="/icons.svg#icon-whatsapp" />
                            </svg>
                        </a>

                    </div>
                </div>

                <div className={css.bottom}>
                    <p>
                        © {currentYear} Теплий Дотик. Всі права захищені.
                    </p>
                </div>

            </div>
        </footer>
    );
}