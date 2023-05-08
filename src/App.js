import React, { useState, useEffect } from "react";
import Cards from "./components/Cards";
import NavBar from "./components/Navbar";
import './styles/App.css'
import './styles/CardContainer.css'
import './styles/Cards.css'
import './styles/NavBar.css'
import { tsConstructSignatureDeclaration } from "@babel/types";

const App = () => {
  const [cards, setCards] = useState({
      sage: {
        clicked: false
      },
      reyna: {
        clicked: false
      },
      viper: {
        clicked: false
      },
      neon: {
        clicked: false
      },
      kj: {
        clicked: false
      },
      fade: {
        clicked: false
      },
      astra: {
        clicked: false
      },
      raze: {
        clicked: false
      },
      jett: {
        clicked: false
      },
      skye: {
        clicked: false
      },
  })

  const [score, setScore] = useState(0);
  
  const characterImages = {
    sage: require('./images/sage.jpg'),
    reyna: require('./images/reyna.jpg'),
    fade: require('./images/fade.jpg'),
    jett: require('./images/jett.jpg'),
    neon: require('./images/neon.jpg'),
    kj: require('./images/kj.jpg'),
    raze: require('./images/raze.webp'),
    astra: require('./images/astra.webp'),
    viper: require('./images/viper.jpg'),
    skye: require('./images/skye.webp')
  }

  function randomizeCards(cards) {
    for (let i = 0; i < 27; i++) {
        let num1 = Math.floor(Math.random() * cards.length);
        let num2 = Math.floor(Math.random() * cards.length);

        if (num1 === num2) {
            continue;
        }

        let card1 = cards[num1];
        let card2 = cards[num2];

        cards[num2] = card1;
        cards[num1] = card2;
    }

    return cards;
  }

  function handleClick(card) {
    handleOverlays(card);

    setTimeout(() => {
      handleCardState(card)
    }, 2000)
  }

  function handleOverlays(card) {
    const getOverlays = document.querySelectorAll("#overlay");

    getOverlays.forEach(overlay => {
      if (overlay.className.includes(`${card}`)) {
        overlay.classList.toggle('hideToggle');
        overlay.classList.add('correct');
      } else {
        overlay.classList.toggle('hideToggle');
        overlay.classList.add('not-selected');
      }
    })
  }

  function handleCardState(card) {
    setCards(allCards => ({
      ...allCards,
      [card]: {
        clicked: true
      }
    }))
  }

  return (
    <>
      <NavBar />
      <Cards images={characterImages} randomize={randomizeCards} clickEvent={handleClick}/>
    </>
  )
}

export default App;
