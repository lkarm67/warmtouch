import css from './Hero.module.css';

export default function Hero() {
    return (
        <section className={css.hero}>
            <div className={css.heroTextWrapper}>
                <div className="container">
                    <div className={css.heroText}>
                        <h1 id="home" className={css.title}>Будую <span className={css.highlight}>печі, груби, каміни та барбекю-комплекси</span> під ключ</h1>
                        <h2 className={css.subtitle}>Відчуй теплий дотик домашнього затишку, створеного вогнем.</h2>
                        <h2 className={css.subtitle}>Тепло у вашому домі на довгі роки.</h2>
                        <div className={css.ctaButtons}>
                            <button className={css.primaryBtn}>Замовити консультацію</button>
                            <button className={css.secondaryBtn}>Дивитись роботи</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className={css.heroImage}></div>
            
        </section>
    );
}