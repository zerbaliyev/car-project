"use client"
import Image from "next/image";

export default function Stars({selectedStars, maxStars}) {
    const stars = [];

    for (let i = 0; i < maxStars; i++)
      stars.push(
        <Image 
          src={
            selectedStars > i
              ? "/imgs/icons/full-star.svg"
              : "/imgs/icons/empty-star.svg"
        }
          alt={selectedStars > i ? "full star" : "empty star"}
          width={24}
          height={24}
          key={i}
        />
    )
  return <div className="flex">{stars}</div>
}
