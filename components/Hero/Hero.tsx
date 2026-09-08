import Link from 'next/link';
import css from './Hero.module.css';

export default function Hero() {
    return (
        <section className={css.hero} id="home">
            <div className={css.heroTextWrapper}>
                <div className="container">
                    <div className={css.heroText}>
                        <h1 className={css.title}>Будую <span className={css.highlight}>печі, груби, каміни та барбекю-комплекси</span> під ключ</h1>
                        <h2 className={css.subtitle}>Відчуй теплий дотик домашнього затишку, створеного вогнем.</h2>
                        <h2 className={css.subtitle}>Тепло у вашому домі на довгі роки.</h2>
                        <div className={css.ctaButtons}> 
                            <Link href="#contacts" className={css.primaryBtn}> Замовити консультацію </Link> 
                            <Link href="#portfolio" className={css.secondaryBtn}> Дивитись роботи </Link> 
                        </div>
                    </div>
                </div>
            </div>

            <div className={css.heroImage}></div>
            
        </section>
    );
}