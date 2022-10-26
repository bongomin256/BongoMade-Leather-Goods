import React from "react";
import { Button } from "./Styles/Button.styled";
import { HeroStyles } from "./Styles/Hero.styled";

export default function Hero() {
  return (
    <HeroStyles>
      <div>
        <p>HANDMADE LEATHER PRODUCTS</p>
      </div>
      <div>
        <Button>SHOP MEN</Button>
        <Button id="reverse" bg="#FFFFFF">
          SHOP WOMEN
        </Button>
      </div>
    </HeroStyles>
  );
}
