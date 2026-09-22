import css from "./Loading.module.css";

export default function Loading() {
    return (
        <main className={css.page} aria-label="Завантаження">
            <span className={css.spinner} aria-hidden="true" />
        </main>
    );
}