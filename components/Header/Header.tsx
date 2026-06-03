import Image from "next/image";
import css from "./Header.module.css";

export default function Header() {
    return (
        <header className={css.header}>
            {/* LOGO  */}
            <div className={css.logo}>
                <Image src="/logo.svg" alt="Logo" />
            </div>
        </header>
    );
}