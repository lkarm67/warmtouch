import css from "./FireIcon.module.css";

interface Props {
    className?: string;
}

export default function FireIcon({ className }: Props) {
    return (
        <svg
            className={`${css.fire} ${className ?? ""}`}
            viewBox="0 0 32 40"
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs>
                <radialGradient id="coreGradient">
                    <stop offset="0%" stopColor="#FFF8D6" />
                    <stop offset="100%" stopColor="#FFD95E" />
                </radialGradient>

                <linearGradient id="middleGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#FFC247" />
                    <stop offset="100%" stopColor="#FF8A1E" />
                </linearGradient>

                <linearGradient id="outerGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#FF9D2E" />
                    <stop offset="100%" stopColor="#D34B11" />
                </linearGradient>
            </defs>

            {/* Outer flame */}

            <path
                className={css.outer}
                fill="url(#outerGradient)"
                d="
                M32 60
                C16 48 10 37 12 26
                C14 14 24 8 30 2
                C28 12 40 15 46 26
                C53 39 48 51 32 60
                Z
                "
            />

            {/* Middle flame */}

            <path
                className={css.middle}
                fill="url(#middleGradient)"
                d="
                M32 54
                C22 46 20 36 22 28
                C24 20 30 14 33 8
                C34 16 42 20 43 30
                C44 40 40 48 32 54
                Z
                "
            />

            {/* Core */}

            <path
                className={css.core}
                fill="url(#coreGradient)"
                d="
                M32 48
                C28 43 28 37 30 31
                C31 27 33 23 34 19
                C35 25 38 29 38 35
                C38 41 36 45 32 48
                Z
                "
            />
        </svg>
    );
}