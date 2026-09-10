import css from "./Loading.module.css";

export default function Loading() {
    return (
        <main className={css.page} aria-label="Завантаження">
            <div className={css.loader}>
                <span className={css.flame} />
                <span className={css.text}>Завантаження...</span>
            </div>
        </main>
    );
}