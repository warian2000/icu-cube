"use client";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      <header>
        <div className="socials">
          <a href="https://dexscreener.com/" target="_blank">
            <img src="images/custom-icon.png" alt="Custom Icon" />
          </a>
          <a href="https://pump.fun/board/" target="_blank">
            <img src="images/custom-icon2.png" alt="Custom Icon" />{" "}
          </a>
          <a href="https://t.me/icecubefuncoin/" target="_blank">
            <img src="images/custom-icon3.png" alt="Custom Icon" />
          </a>
          <a href="https://x.com/IceCubeFANpump" target="_blank">
            <img src="images/custom-icon4.png" alt="Custom Icon" />
          </a>
        </div>
        <h1>Ice Cube Birthday Celebration</h1>
        <p>Celebrating one of the best rapper and actor, Ice Cube</p>
      </header>
      <div className="section">
        <h2>About Ice Cube</h2>
        <p>
          Ice Cube, born O'Shea Jackson on June 15, 1969, is a renowned rapper,
          actor, and filmmaker. He is one of the founding members of the seminal
          rap group N.W.A. and has had a significant impact on both the music
          and film industries. Ice Cube's work has transcended generations,
          making him a cultural icon.
        </p>
      </div>
      <div className="section">
        <h2>Ice Cube Coin</h2>
        <p>
          In celebration of Ice Cube's birthday, we have created a special meme
          coin. This coin is a tribute to his lasting influence on pop culture
          and his contributions to the world of music and entertainment. Join us
          in honoring Ice Cube with this unique digital collectible.
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
