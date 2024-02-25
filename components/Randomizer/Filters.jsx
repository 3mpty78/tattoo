import React from "react";
import Selector from "./Selector";
import "./randomizer.scss";
import DisplayImage from "./DisplayImage";

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
            <DisplayImage
                imageUrl={random_image}
                artiste={"Artiste"}
                instagram={"coucou_zebi"}
            />
        </section>
    );
}
