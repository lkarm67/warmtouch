'use client';

import { useEffect, useRef } from 'react';
import css from './FireCursor.module.css';
import FireIcon from './FireIcon';

export default function FireCursor() {
    const cursorRef = useRef<HTMLDivElement>(null);

    const mouse = useRef({
        x: 0,
        y: 0,
    });

    const pos = useRef({
        x: 0,
        y: 0,
    });

    useEffect(() => {
        const move = (e: MouseEvent) => {
            mouse.current.x = e.clientX;
            mouse.current.y = e.clientY;
        };

        window.addEventListener('mousemove', move);

        let frame: number;

        const animate = () => {
            pos.current.x += (mouse.current.x - pos.current.x) * 0.18;
            pos.current.y += (mouse.current.y - pos.current.y) * 0.18;

            if (cursorRef.current) {
                cursorRef.current.style.transform =
                    `translate(${pos.current.x - 16}px,
                               ${pos.current.y - 30}px)`;
            }

            frame = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            cancelAnimationFrame(frame);
            window.removeEventListener('mousemove', move);
        };
    }, []);

    return (
        <div className={css.cursor} ref={cursorRef}>
            <FireIcon />
        </div>
    );
}