import css from './QuoteDivider.module.css';

export default function QuoteDivider() {
    return (
        <div className={css.quoteDividerContainer}>
            <hr className={css.quoteDivider} />
            <svg className={css.quoteIcon_fire} aria-hidden="true">
                <use href="/icons.svg#icon-fire" />
            </svg>
            <hr className={css.quoteDivider} />
        </div>
    );
}