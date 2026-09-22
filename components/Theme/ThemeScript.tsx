const themeScript = `
    (function () {
        try {
            var savedTheme = localStorage.getItem("theme");
            var theme = savedTheme === "light" || savedTheme === "dark" || savedTheme === "system"
            ? savedTheme
             : "system";

            var isDark = theme === "dark";

            if (theme === "system") {
                isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            }

            document.documentElement.dataset.theme = isDark ? "dark" : "light";
        } catch (error) {
            document.documentElement.dataset.theme = "light";
        }
    })();
`;

export default function ThemeScript() {
    return (
        <script
            dangerouslySetInnerHTML={{ __html: themeScript }}
        />
    );
}
