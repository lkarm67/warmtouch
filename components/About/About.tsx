import Image from "next/image";
import Link from "next/link";
import { Marck_Script } from "next/font/google";

import SectionDivider from "../SectionDivider/SectionDivider";
import QuoteDivider from "../QuoteDivider/QuoteDivider";
import css from "./About.module.css";

const marck = Marck_Script({
    subsets: ["latin", "cyrillic"],
    weight: "400",
});

export default function About() {
    return (
        <section className={css.about} id="about">
            <div className={css.container}>
                <div className={css.aboutIntro}>
                    <div className={css.imageWrapper}>
                        <Image
                            src="/images/about_td.jpeg"
                            alt="Григорій Коротя"
                            fill
                            sizes="(max-width: 768px) 100vw, 400px"
                            className={css.aboutImage}
                        />
                    </div>

                    <div className={css.aboutContent}>
                        <h2 className={css.title}>
                            Григорій Коротя — майстер пічної справи
                        </h2>

                        <SectionDivider />

                        <p className={css.description}>
                            Понад 10 років займаюся будівництвом печей,
                            камінів, груб та барбекю-комплексів під ключ.
                            Кожен проєкт виконується індивідуально з
                            урахуванням ваших побажань, особливостей
                            приміщення та бюджету. Моя мета — щоб піч або
                            камін дарували тепло, затишок та служили вашій
                            родині багато років.
                        </p>

                        <ul className={css.infoList}>
                            <li className={css.infoItem}>
                                <svg
                                    className={css.aboutIcon}
                                    aria-hidden="true"
                                >
                                    <use href="/icons.svg#icon-hour-glass1" />
                                </svg>

                                <div className={css.infoText}>
                                    <h3 className={css.infoSubtitle}>10+</h3>
                                    <p className={css.infoLabel}>
                                        років досвіду
                                    </p>
                                </div>
                            </li>

                            <li className={css.infoItem}>
                                <svg
                                    className={css.aboutIcon}
                                    aria-hidden="true"
                                >
                                    <use href="/icons.svg#icon-hammer" />
                                </svg>

                                <div className={css.infoText}>
                                    <h3 className={css.infoSubtitle}>50+</h3>
                                    <p className={css.infoLabel}>
                                        виконаних проєктів
                                    </p>
                                </div>
                            </li>

                            <li className={css.infoItem}>
                                <svg
                                    className={css.aboutIcon}
                                    aria-hidden="true"
                                >
                                    <use href="/icons.svg#icon-key" />
                                </svg>

                                <div className={css.infoText}>
                                    <h3 className={css.infoSubtitle}>
                                        Під ключ
                                    </h3>
                                    <p className={css.infoLabel}>
                                        від проєкту до запуску
                                    </p>
                                </div>
                            </li>

                            <li className={css.infoItem}>
                                <svg
                                    className={css.aboutIcon}
                                    aria-hidden="true"
                                >
                                    <use href="/icons.svg#icon-shield1" />
                                </svg>

                                <div className={css.infoText}>
                                    <h3 className={css.infoSubtitle}>
                                        Гарантія
                                    </h3>
                                    <p className={css.infoLabel}>
                                        на всі роботи
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className={css.infoAdvantages}>
                    <h3 className={css.infoAdvantagesTitle}>
                        Чому мені довіряють
                    </h3>

                    <div className={css.infoAdvantageBlock}>
                        <div className={css.infoBlock}>
                            <ul className={css.infoAdvantagesList}>
                                <li className={css.infoAdvantageItem}>
                                    <svg
                                        className={css.infoIcon}
                                        aria-hidden="true"
                                    >
                                        <use href="/icons.svg#icon-check1" />
                                    </svg>

                                    <p className={css.infoAdvantageText}>
                                        Індивідуальний проєкт
                                    </p>
                                </li>

                                <li className={css.infoAdvantageItem}>
                                    <svg
                                        className={css.infoIcon}
                                        aria-hidden="true"
                                    >
                                        <use href="/icons.svg#icon-check1" />
                                    </svg>

                                    <p className={css.infoAdvantageText}>
                                        Якісні матеріали
                                    </p>
                                </li>

                                <li className={css.infoAdvantageItem}>
                                    <svg
                                        className={css.infoIcon}
                                        aria-hidden="true"
                                    >
                                        <use href="/icons.svg#icon-check1" />
                                    </svg>

                                    <p className={css.infoAdvantageText}>
                                        Дотримання термінів
                                    </p>
                                </li>

                                <li className={css.infoAdvantageItem}>
                                    <svg
                                        className={css.infoIcon}
                                        aria-hidden="true"
                                    >
                                        <use href="/icons.svg#icon-check1" />
                                    </svg>

                                    <p className={css.infoAdvantageText}>
                                        Професійна консультація
                                    </p>
                                </li>
                            </ul>

                            <Link
                                className={css.ctaBtn}
                                href="https://wa.me/380971647012"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Замовити консультацію
                            </Link>
                        </div>

                        <div className={css.infoTrustReasons}>
                            <div className={css.overlay}></div>

                            <p className={css.infoTrustReason}>
                                Піч — це не просто джерело тепла. Це серце
                                дому, що б'ється в унісон із родиною.
                            </p>

                            <QuoteDivider />

                            <p className={`${css.infoLogo} ${marck.className}`}>
                                Теплий дотик
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
