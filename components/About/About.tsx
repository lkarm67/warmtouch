import css from './About.module.css';
import Image from 'next/image';

export default function About() {
    return (
        <section className={css.about + ' container'}>
            <div className={css.aboutImage}>
                <Image 
                    src="/about.jpg" 
                    alt="Григорій Коротя" 
                    width={400} height={400} 
                    className={css.profileImage} 
                />
            </div>
            <div className={css.aboutContent}>
                <h2 className={css.title}>Григорій Коротя — майстер пічної справи</h2>
                <div className={css.dividerContainer}>
                    <hr className={css.divider}/>
                    <svg className={css.icon_fire}>
                        <use href="#fire-icon"></use>
                    </svg> 
                    <hr className={css.divider}/>
                </div>
                <p className={css.description}>
                     Понад 10 років займаюся будівництвом печей, камінів, груб та барбекю-комплексів під ключ. 
                </p>
                {/* <p className={css.description}>
                     У своїй роботі я поєдную перевірені часом технології пічного ремесла з сучасними матеріалами та вимогами до безпеки. 
                     Для мене важливо не лише створити надійну конструкцію, а й зробити її гармонійною частиною вашого дому.
                </p>
                <p className={css.description}>
                     Кожен проєкт виконується індивідуально з урахуванням ваших побажань, особливостей приміщення та бюджету. 
                     Моя мета — щоб піч або камін дарували тепло, затишок та служили вашій родині багато років.
                </p>*/}
                
                <ul className={css.infoList}>
                    <li className={css.infoItem}>
                        <svg className={css.calendar}>
                            <use href="#calendar-icon"></use>
                        </svg>
                        <div className={css.infoText}>
                            <h2 className={css.infoNumber}>10+</h2>
                            <p className={css.infoLabel}>років досвіду</p>
                        </div>
                    </li>
                    <li className={css.infoItem}>
                        <svg className={css.pechi}>
                            <use href="#pechi-icon"></use>
                        </svg>
                        <div className={css.infoText}>
                            <h2 className={css.infoSubtitle}>50+</h2>
                            <p className={css.infoLabel}>виконаних проєктів</p>
                        </div>
                    </li>
                    <li className={css.infoItem}>
                        <svg className={css.people}>
                            <use href="#people-icon"></use>
                        </svg>
                        <div className={css.infoText}>
                            <h2 className={css.infoSubtitle}>98%</h2>
                            <p className={css.infoLabel}>задоволених клієнтів</p>
                        </div>
                    </li>
                    <li className={css.infoItem}>
                        <svg className={css.schit}>
                            <use href="#schit-icon"></use>
                        </svg>
                        <div className={css.infoText}>
                            <h2 className={css.infoSubtitle}>Гарантія</h2>
                            <p className={css.infoLabel}>на всі роботи</p>
                        </div>
                    </li>
                </ul>    

                <div className={css.infoAdvantages}>
                    <h2 className={css.infoAdvantagesTitle}>Чому мені довіряють</h2>
                    <div>
                        <ul className={css.infoAdvantagesList}>
                            <li className={css.infoAdvantageItem}>
                                <svg className={css.infoIcon}>
                                    <use href="#project-icon"></use>
                                </svg>
                                Індивідуальний проєкт</li>
                            <li className={css.infoAdvantageItem}>
                                <svg className={css.infoIcon}>
                                    <use href="#materials-icon"></use>
                                </svg>
                                Якісні матеріали</li>
                            <li className={css.infoAdvantageItem}>
                                <svg className={css.infoIcon}>
                                    <use href="#timeline-icon"></use>
                                </svg>
                                Дотримання термінів</li>
                            <li className={css.infoAdvantageItem}>
                                <svg className={css.infoIcon}>
                                    <use href="#consultation-icon"></use>
                                </svg>
                                Професійна консультація</li>
                        </ul>

                        <div className={css.infoTrustReasons}>
                            <p className={css.infoTrustReason}>
                                "Кожна піч, камін чи барбекю-комплекс — це не просто будівництво, а створення місця, де збирається родина. 
                                Саме тому я приділяю особливу увагу якості матеріалів, безпеці конструкції та акуратності виконання робіт."
                                "За роки роботи я реалізував десятки проєктів різної складності, допомагаючи клієнтам створювати затишок і 
                                тепло у своїх домівках."
                            </p>
                        </div>
                    </div>               
                </div>

                <button className={css.ctaBtn}>Замовити консультацію</button>      

            </div>    
        </section>
    );
}