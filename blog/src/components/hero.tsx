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
        <figure className="h-44 relative">
          <Image src={eyeCatch} alt="heroCat" layout="fill" objectFit="cover" />
        </figure>
      )}
    </div>
  );
};
