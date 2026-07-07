'use client';

import css from './Sparks.module.css';

export default function Sparks() {

    return (
        <>
            <span className={`${css.spark} ${css.s1}`}></span>
            <span className={`${css.spark} ${css.s2}`}></span>
            <span className={`${css.spark} ${css.s3}`}></span>
            <span className={`${css.spark} ${css.s4}`}></span>
        </>
    );

}