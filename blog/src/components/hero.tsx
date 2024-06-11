import Image from "next/image";
import React from "react";
import eyeCatch from "../../public/heroCat.webp";

interface HeroProps {
  title: string;
  subtitle: string;
  imageOn: boolean;
}

export const Hero = ({ title, subtitle, imageOn = false }: HeroProps) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{subtitle}</p>
      {imageOn && (
        <figure className="p-4 relative">
          <Image src={eyeCatch} alt="heroCat" width={100} height={200} />
        </figure>
      )}
    </div>
  );
};
