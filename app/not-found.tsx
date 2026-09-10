import Link from "next/link";
import css from "./NotFound.module.css";

export default function NotFound() {
    return (
        <main className={css.page}>
            <div className={css.content}>
                <span className={css.code}>404</span>

                <h1 className={css.title}>
                    Сторінку не знайдено
                </h1>

                <p className={css.text}>
                    Можливо, сторінку було переміщено або такої адреси більше не існує.
                </p>

                <Link href="/" className={css.button}>
                    На головну
                </Link>
            </div>
        </main>
    );
}