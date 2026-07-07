'use client';

import css from './FireCursor.module.css';
import FireIcon from './FireIcon';
import CursorGlow from './CursorGlow';
import { useCursorPhysics } from './useCursorPhysics';
import Sparks from './Sparks';

export default function FireCursor() {

    const {
        mainRef,
        trail1Ref,
        trail2Ref,
        glowRef,
        hovering,
        sparkRef,
    } = useCursorPhysics();

    return (
        <>
            <div ref={glowRef} className={`${css.cursor} ${css.glow}`}>
                <CursorGlow />
            </div>

            <div ref={trail2Ref} className={`${css.cursor} ${css.trail2}`}>
                <FireIcon />
            </div>

            <div ref={trail1Ref} className={`${css.cursor} ${css.trail1}`}>
                <FireIcon />
            </div>

            <div ref={mainRef} className={`${css.cursor} ${css.main}`}>
                <FireIcon />
            </div>

            <div ref={sparkRef} className={`${css.cursor} ${css.sparkLayer}`}>
                <Sparks/>
            </div>
        </>
    );
}