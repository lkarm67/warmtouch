import css from './About.module.css';
import Image from 'next/image';

export default function About() {
    return (
        <section className={css.about + ' container'}>
            <div className={css.imageWrapper}>
                <Image 
                    src="/images/about_td.jpeg" 
                    alt="Григорій Коротя" 
                    width={400}
                    height={500}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw" 
                    className={css.aboutImage} 
                />
            </div>
            <div className={css.aboutContent}>
                <h2 className={css.title}>Григорій Коротя — майстер пічної справи</h2>
                <div className={css.dividerContainer}>
                    <hr className={css.divider}/>
                    <svg className={css.icon_fire}>
                        <use href="/icons.svg#icon-fire"></use>
                    </svg> 
                    <hr className={css.divider}/>
                </div>
                <p className={css.description}>
                     Понад 10 років займаюся будівництвом печей, камінів, груб та барбекю-комплексів під ключ. 
                     Кожен проєкт виконується індивідуально з урахуванням ваших побажань, особливостей приміщення та бюджету. 
                     Моя мета — щоб піч або камін дарували тепло, затишок та служили вашій родині багато років.
                </p>
                {/* <p className={css.description}>
                     У своїй роботі я поєдную перевірені часом технології пічного ремесла з сучасними матеріалами та вимогами до безпеки. 
                     Для мене важливо не лише створити надійну конструкцію, а й зробити її гармонійною частиною вашого дому.
                </p>*/}
                
                <ul className={css.infoList}>
                    <li className={css.infoItem}>
                        <svg className={css.aboutIcon}>
                            <use href="/icons.svg#icon-hour-glass1"></use>
                        </svg>
                        <div className={css.infoText}>
                            <h3 className={css.infoSubtitle}>10+</h3>
                            <p className={css.infoLabel}>років досвіду</p>
                        </div>
                    </li>
                    <li className={css.infoItem}>
                        <svg className={css.aboutIcon}>
                            <use href="/icons.svg#icon-hammer"></use>
                        </svg>
                        <div className={css.infoText}>
                            <h3 className={css.infoSubtitle}>50+</h3>
                            <p className={css.infoLabel}>виконаних проєктів</p>
                        </div>
                    </li>
                    <li className={css.infoItem}>
                        <svg className={css.aboutIcon}>
                            <use href="/icons.svg#icon-users1"></use>
                        </svg>
                        <div className={css.infoText}>
                            <h3 className={css.infoSubtitle}>98%</h3>
                            <p className={css.infoLabel}>задоволених клієнтів</p>
                        </div>
                    </li>
                    <li className={css.infoItem}>
                        <svg className={css.aboutIcon}>
                            <use href="/icons.svg#icon-shield1"></use>
                        </svg>
                        <div className={css.infoText}>
                            <h3 className={css.infoSubtitle}>Гарантія</h3>
                            <p className={css.infoLabel}>на всі роботи</p>
                        </div>
                    </li>
                </ul>    

                <div className={css.infoAdvantages}>
                    <h3 className={css.infoAdvantagesTitle}>Чому мені довіряють</h3>
                    <div className={css.infoAdvantageBlock}>
                        <ul className={css.infoAdvantagesList}>
                            <li className={css.infoAdvantageItem}>
                                <svg className={css.infoIcon}>
                                    <use href="/icons.svg#icon-check1"></use>
                                </svg>
                                <p className={css.infoAdvantageText}>
                                    Індивідуальний проєкт
                                </p>
                            </li>
                            <li className={css.infoAdvantageItem}>
                                <svg className={css.infoIcon}>
                                    <use href="/icons.svg#icon-check1"></use>
                                </svg>
                                <p className={css.infoAdvantageText}>
                                    Якісні матеріали
                                </p>
                            </li>
                        </ul>

                        <div className={css.infoTrustReasons}>
                            
                                <svg className={css.qouteIcon}>
                                    <use href="/icons.svg#icon-quotes-left"></use>
                                </svg>
                                <p className={css.infoTrustReason}>
                                Кожна піч, камін чи барбекю-комплекс — це не просто будівництво, а створення місця, де збирається родина. 
                                Саме тому я приділяю особливу увагу якості матеріалів, безпеці конструкції та акуратності виконання робіт.
                                </p>
                                <svg className={css.qouteIcon}>
                                    <use href="/icons.svg#icon-quotes-right"></use>
                                </svg>
                            
                        </div>

                    </div>

                    <div className={css.infoAdvantageBlock}>
                        <ul className={css.infoAdvantagesList}>
                            <li className={css.infoAdvantageItem}>
                                <svg className={css.infoIcon}>
                                    <use href="/icons.svg#icon-check1"></use>
                                </svg>
                                <p className={css.infoAdvantageText}>
                                    Дотримання термінів
                                </p>
                            </li>
                            <li className={css.infoAdvantageItem}>
                                <svg className={css.infoIcon}>
                                    <use href="/icons.svg#icon-check1"></use>
                                </svg>
                                Професійна консультація
                            </li>
                        </ul>

                        <div className={css.infoTrustReasons}>
                            <p className={css.infoTrustReason}>
                                <svg className={css.qouteIcon}>
                                    <use href="/icons.svg#icon-quotes-left"></use>
                                </svg>
                                "За роки роботи я реалізував десятки проєктів різної складності, допомагаючи клієнтам створювати затишок і 
                                тепло у своїх домівках."
                                <svg className={css.qouteIcon}>
                                    <use href="/icons.svg#icon-quotes-right"></use>
                                </svg>
                            </p>
                        </div>
                    </div>               
                </div>

                <button className={css.ctaBtn}>Замовити консультацію</button>      

            </div>    
        </section>
    );
}