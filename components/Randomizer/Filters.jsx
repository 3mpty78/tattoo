import React from "react";
import Selector from "./Selector";
import Image from "next/image";
import "./randomizer.scss";

import random_image from "@/public/img/bannerImage.webp";

export default function Filters() {
    const styles = ["Old School", "New School", "Japonais"];
    const localisations = ["Paris", "Bretagne"];

    return (
        <section id="randomizer">
            <h2>Fais tes choix</h2>
            <Selector title={"Choisi ton style"} options={styles} />
            <Selector title={"Choisi ta région"} options={localisations} />
            <button>PLAY</button>
            <Image
                src={random_image}
                alt=""
                style={{
                    width: "100%",
                    height: "100%",
                    aspectRatio: "1/1",
                    objectFit: "cover",
                }}
            />
        </section>
    );
}
