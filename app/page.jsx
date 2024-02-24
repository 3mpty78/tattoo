import Image from "next/image";

import banner from "@/public/img/bannerImage.webp";

export default function Home() {
    return (
        <main id="homepage">
            <h1>Tattoo Roulette</h1>
            <Image src={banner} alt="Homepage banenr image" />
        </main>
    );
}
