import css from './SectionDivider.module.css';

export default function SectionDivider() {
    return (
        <div className={css.dividerContainer}>
            <hr className={css.divider} />
            <svg className={css.icon_fire} aria-hidden="true">
                <use href="/icons.svg#icon-fire" />
            </svg>
            <hr className={css.divider} />
        </div>
    );
}