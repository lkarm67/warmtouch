import css from './Hero.module.css';

export default function Hero() {
    return (
        <section className={css.hero}>
            <div className={css.heroText}>
                <h1 className={css.title}>Будую печі, каміни, груби та барбекю-комплекси під ключ</h1>
                <h2 className={css.subtitle}>Відчуй теплий дотик домашнього затишку, створеного вогнем</h2>
            </div>
            <div className={css.heroImage}></div>
        </section>
    );
}