'use client';

import { useEffect, useRef } from 'react';

export function useCursorPhysics() {

    // refs DOM

    const mainRef = useRef<HTMLDivElement>(null);
    const trail1Ref = useRef<HTMLDivElement>(null);
    const trail2Ref = useRef<HTMLDivElement>(null);
    const glowRef = useRef<HTMLDivElement>(null);
    const sparkRef = useRef<HTMLDivElement>(null);

    // положення миші

    const mouse = useRef({
        x: 0,
        y: 0,
    });

    // швидкість

    const velocity = useRef({
        x: 0,
        y: 0,
    });

    const lastMouse = useRef({
        x: 0,
        y: 0,
    });

    // координати шарів

    const main = useRef({
        x: 0,
        y: 0,
    });

    const trail1 = useRef({
        x: 0,
        y: 0,
    });

    const trail2 = useRef({
        x: 0,
        y: 0,
    });

    const glow = useRef({
        x: 0,
        y: 0,
    });

    // ховер
    const hovering = useRef(false);
    const isHovering = useRef(false);

    useEffect(() => {

        const move = (e: MouseEvent) => {

            velocity.current.x = e.clientX - lastMouse.current.x;
            velocity.current.y = e.clientY - lastMouse.current.y;

            lastMouse.current.x = e.clientX;
            lastMouse.current.y = e.clientY;

            mouse.current.x = e.clientX;
            mouse.current.y = e.clientY;

            const target = e.target as HTMLElement;

            hovering.current =
                !!target.closest(
                    'a,button,[role="button"]'
              );

        };

        window.addEventListener('mousemove', move);

        let frame: number;

        const animate = () => {

            // основний

            main.current.x +=
                (mouse.current.x - main.current.x) * 0.28;

            main.current.y +=
                (mouse.current.y - main.current.y) * 0.28;

            // перший шлейф

            trail1.current.x +=
                (main.current.x - trail1.current.x) * 0.18;

            trail1.current.y +=
                (main.current.y - trail1.current.y) * 0.18;

            // другий шлейф

            trail2.current.x +=
                (trail1.current.x - trail2.current.x) * 0.12;

            trail2.current.y +=
                (trail1.current.y - trail2.current.y) * 0.12;

            // glow

            glow.current.x +=
                (trail2.current.x - glow.current.x) * 0.08;

            glow.current.y +=
                (trail2.current.y - glow.current.y) * 0.08; 

            // нахил

            const angle = Math.max(
                -12,
                Math.min(
                    12,
                    -velocity.current.x * 0.25
                )
            );

            // витягування

            const stretch = Math.min(
                1.12,
                1 + Math.abs(velocity.current.y) * 0.002
            );

            const brightness = hovering.current
                ? 1.1
                : 1;

            const scale = hovering.current
                ? 1.06
                : 1;

            if (mainRef.current) {

                mainRef.current.style.transform = `
                    translate(${main.current.x - 16}px, ${main.current.y - 30}px)
                    rotate(${angle}deg)
                    scale(${scale})
                    scaleY(${stretch})
                `;

                mainRef.current.style.filter = `
                    brightness(${brightness})
                `;

            }

            if (trail1Ref.current) {

                trail1Ref.current.style.transform = `
                    translate(${trail1.current.x - 16}px, ${trail1.current.y - 30}px)
                    rotate(${angle * 0.7}deg)
                    scaleY(${stretch * 0.98})
                `;

                trail1Ref.current.style.filter = `
                    brightness(${brightness})
                `;

            }

            if (trail2Ref.current) {

                trail2Ref.current.style.transform = `
                    translate(${trail2.current.x - 16}px, ${trail2.current.y - 30}px)
                    rotate(${angle * 0.45}deg)
                    scaleY(${stretch * 0.96})
                `;

                trail2Ref.current.style.filter = `
                    brightness(${brightness})
                `;

            }

            if (glowRef.current) {

                glowRef.current.style.transform = `
                    translate(${glow.current.x - 60}px,
                        ${glow.current.y - 60}px)
                    scale(${hovering.current ? 1.25 : 1})
              `;

                glowRef.current.style.opacity =
                    hovering.current ? '1' : '.75';

            }

            if (sparkRef.current){

                sparkRef.current.style.transform = `
                    translate(${trail2.current.x - 10}px,
                        ${trail2.current.y - 22}px)
                    rotate(${angle * .4}deg)
                `;

            }

            frame = requestAnimationFrame(animate);

        };

        animate();

        return () => {

            cancelAnimationFrame(frame);

            window.removeEventListener(
                'mousemove',
                move
            );

        };

    }, []);

    return {

        mainRef,
        trail1Ref,
        trail2Ref,
        glowRef,
        hovering,
        sparkRef,
    };

}