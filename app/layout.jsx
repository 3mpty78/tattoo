import Navbar from "@/components/Navigation/Navbar";
import "./globals.scss";

export const metadata = {
    title: "Tattoo Roulette",
    description: "Generated by create next app",
};

export default function RootLayout({ children }) {
    return (
        <html lang="fr">
            <body>
                <Navbar />
                {children}
            </body>
        </html>
    );
}