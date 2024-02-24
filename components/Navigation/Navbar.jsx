import Link from "next/link";
import "./navbar.scss";

const navlinks = [
    { name: "Accueil", path: "/" },
    { name: "Concept", path: "/concept" },
    { name: "A propos", path: "/about" },
    { name: "Contact", path: "/contact" },
];

export default function Navbar() {
    return (
        <nav>
            <ul>
                {navlinks.map((link) => (
                    <li key={link.name}>
                        <Link href={link.path}>{link.name}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
