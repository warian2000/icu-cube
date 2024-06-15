"use client";
import Image from "next/image";

const socials = [
  {
    image: "images/custom-icon.png",
    href: "https://dexscreener.com/",
  },
  {
    image: "images/custom-icon2.png",
    href: "https://pump.fun/CSkXJLa1XWoRV1ZNw79JmNtHvDa2FoAe3RgdaGSNpump",
  },
  {
    image: "images/custom-icon3.png",
    href: "https://t.me/icecubefuncoin/",
  },
  {
    image: "images/custom-icon4.png",
    href: "https://x.com/IceCubeFANpump",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen font-custom">
      <header>
        <div className="flex gap-6 justify-center align-center  p-2">
          {socials.map(({ image, href }) => (
            <a
              className="btn btn-square btn-ghost"
              key={image}
              href={href}
              target="_blank"
            >
              <img src={image} alt="Custom Icon" />
            </a>
          ))}
        </div>
        <h1 className="text-accent">$ICB</h1>

        <h1>Ice Cube Birthday Celebration</h1>
        <p>
          Celebrating one of the best rapper and actor, Ice Cube, with this
          token!
        </p>
        <p className="text-accent font-bold">Born in 06/15/1969 🎉</p>
      </header>
      <div className="section">
        <h2 className="text-accent">About Ice Cube</h2>
        <p>
          Ice Cube, born O&apos;Shea Jackson on June 15, 1969, is a renowned
          rapper, actor, and filmmaker. He is one of the founding members of the
          seminal rap group N.W.A. and has had a significant impact on both the
          music and film industries. Ice Cube&apos;s work has transcended
          generations, making him a cultural icon.
        </p>
      </div>
      <div className="section">
        <h2 className="text-accent">Ice Cube Coin</h2>
        <p>
          In celebration of Ice Cube&apos;s birthday, we have created a special
          meme coin. This coin is a tribute to his lasting influence on pop
          culture and his contributions to the world of music and entertainment.
          Join us in honoring Ice Cube with this unique digital collectible.
        </p>
      </div>
      <div className="images">
        <img src="images/image1.jpg" alt="Ice Cube" />
        <img src="images/image2.jpg" alt="Ice Cube" />
        <img src="images/image3.jpg" alt="Ice Cube" />
        <img src="images/image4.jpg" alt="Ice Cube" />
        <img src="images/image5.jpg" alt="Ice Cube" />
        <img src="images/image6.jpg" alt="Ice Cube" />
      </div>
      <button
        className="change-background-button"
        onClick={() => document.body.classList.toggle("alternate-background")}
      >
        Change Background
      </button>
    </main>
  );
}
