import Image from "next/image";
import css from "./Header.module.css";

export default function Header() {
    return (
        <header className={css.header}>
            {/* LOGO  */}
            <div className={css.logo}>
                <Image
                    src="/logo_warmtouch.svg"
                    alt="Logo"
                    width={180}
                    height={60}
                />
            </div>
        </header>
    );
}