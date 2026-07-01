import css from './Portfolio.module.css';

export default function Portfolio () {
    return(
        <section className={css.portfolio + ' container'}>
            <h2 className={css.title}>Роботи</h2>
            <div className={css.dividerContainer}>
                <hr className={css.divider}/>
                    <svg className={css.icon_fire}>
                        <use href="/icons.svg#icon-fire"></use>
                    </svg>
                <hr className={css.divider}/>
            </div>            
        </section>
    )
}

