import Image from "next/image";
import React from "react";

import Link from "next/link";

export default function DisplayImage({ imageUrl, artiste, instagram }) {
    return (
        <div className="displayImage">
            <Image
                src={imageUrl}
                alt=""
                style={{
                    width: "100%",
                    height: "100%",
                    aspectRatio: "1/1",
                    objectFit: "cover",
                }}
            />
            <div className="text">
                <p>{artiste}</p>
                <Link
                    href={`https://www.instagram.com/${instagram}/`}
                    target="_blank">
                    @{instagram}
                </Link>
            </div>
        </div>
    );
}
