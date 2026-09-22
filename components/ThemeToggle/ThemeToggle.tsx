"use client";

import { useEffect, useState } from "react";

import css from "./ThemeToggle.module.css";

type Theme = "light" | "dark" | "system";

function getSavedTheme(): Theme {
    if (typeof window === "undefined") {
        return "system";
    }

    const savedTheme = localStorage.getItem("theme");

    return savedTheme === "light" ||
        savedTheme === "dark" ||
        savedTheme === "system"
        ? savedTheme
        : "system";
}

export default function ThemeToggle() {
    const [theme, setTheme] = useState<Theme>(getSavedTheme);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia(
            "(prefers-color-scheme: dark)"
        );

        const handleSystemThemeChange = () => {
            if (theme !== "system") {
                return;
            }

            document.documentElement.dataset.theme =
                mediaQuery.matches ? "dark" : "light";
        };

        mediaQuery.addEventListener(
            "change",
            handleSystemThemeChange
        );

        return () => {
            mediaQuery.removeEventListener(
                "change",
                handleSystemThemeChange
            );
        };
    }, [theme]);

    const handleThemeChange = (selectedTheme: Theme) => {
        setTheme(selectedTheme);
        localStorage.setItem("theme", selectedTheme);

        if (selectedTheme === "system") {
            const prefersDark = window.matchMedia(
                "(prefers-color-scheme: dark)"
            ).matches;

            document.documentElement.dataset.theme =
                prefersDark ? "dark" : "light";
        } else {
            document.documentElement.dataset.theme = selectedTheme;
        }

        setIsOpen(false);
    };

    return (
        <div className={css.themeToggle}>
            <button
                className={css.button}
                type="button"
                onClick={() => setIsOpen((prev) => !prev)}
                aria-label="Вибрати тему"
                aria-expanded={isOpen}
            >
                <svg className={css.icon} aria-hidden="true">
                    <use href="/icons.svg#icon-theme" />
                </svg>
            </button>

            {isOpen && (
                <div className={css.dropdown}>
                    <button
                        className={css.dropdownItem}
                        type="button"
                        onClick={() =>
                            handleThemeChange("light")
                        }
                    >
                        Світла тема
                    </button>

                    <button
                        className={css.dropdownItem}
                        type="button"
                        onClick={() =>
                            handleThemeChange("dark")
                        }
                    >
                        Темна тема
                    </button>

                    <button
                        className={css.dropdownItem}
                        type="button"
                        onClick={() =>
                            handleThemeChange("system")
                        }
                    >
                        Як на пристрої
                    </button>
                </div>
            )}
        </div>
    );
}