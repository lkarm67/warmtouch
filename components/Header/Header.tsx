import Image from "next/image";
import Link from "next/link";
import css from "./Header.module.css";

export default function Header() {
    return (
        <header className={css.header + ' container'}>
            {/* LOGO  */}
            <div className={css.logo}>
                <Image
                    src="/images/logo_td_3.jpg"
                    alt="Logo"
                    width={240}
                    height={75}
                />
            </div>

            {/* NAVIGATION  */}
            <nav className={css.nav}>
                <ul className={css.navList}>
                    <li className={css.navItem}>
                        <Link href="#" className={css.navLink}>
                            Головна
                        </Link>
                    </li>
                    <li className={css.navItem}>
                        <Link href="#" className={css.navLink}>
                            Про мене
                        </Link>
                    </li>
                    <li className={css.navItem}>
                        <Link href="#" className={css.navLink}>
                            Послуги
                        </Link>
                    </li>
                    <li className={css.navItem}>
                        <Link href="#" className={css.navLink}>
                            Роботи
                        </Link>
                    </li>
                    <li className={css.navItem}>
                        <Link href="#" className={css.navLink}>
                            Часті запитання
                        </Link>
                    </li>
                    <li className={css.navItem}>
                        <Link href="#" className={css.navLink}>
                            Відгуки
                        </Link>
                    </li>
                    <li className={css.navItem}>
                        <Link href="#" className={css.navLink}>
                            Контакти
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className={css.cta}>
                <div className={css.whatsappBox}>
                    <Link className={css.whatsappLink} href="https://wa.me/380971647012" target="_blank" rel="noopener noreferrer">
                        +38 097 164 70 12 (WhatsApp)
                    </Link>
                </div>
                <Link className={css.ctaBtn} href="https://wa.me/380971647012" target="_blank" rel="noopener noreferrer">
                    Написати на Ватсапп
                </Link>
            </div>
        </header>
    );
}