import React, { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { deleteCard, deleteDeck, readDeck } from "../utils/api";
import Buttons from "./Buttons";
import CardView from "./CardView";

export function ViewDeck() {
  const { deckId } = useParams();
  const history = useHistory();
  const [deck, setDeck] = useState({
    id: 0,
    name: "",
    cards: [],
  });

  //useEffect to fetch card data
  useEffect(() => {
    async function loadDecks() {
      const loadedDeck = await readDeck(deckId);
      setDeck(loadedDeck);
    }
    loadDecks();
  }, [deckId]);


  //handle card delete
  function deleteCardHandler(cardId) {
    if (window.confirm("Delete Card? This can not be undone.")) {
      deleteCard(cardId).then((output) => history.go(0));
    }
  }

  //handle deck delete
  function deleteDeckHandler(deckId) {
    const confirmed = window.confirm(`Delete this deck? \n\nYou will not be able to recover it.`);
        if (confirmed) {
          deleteDeck(deckId);
          history.push("/");
          history.go(0);
        }
    }
  

  const cardList = deck.cards.map((card, index) => (
    <CardView key={index} card={card} deck={deck} deleteCardHandler={deleteCardHandler} />
  ));

  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {deck.name}
          </li>
        </ol>
      </nav>
      <h4>{deck.name}</h4>
      <p>{deck.description}</p>
      <Buttons deck={deck} deleteDeckHandler={deleteDeckHandler} />
      <div className="card-list">{cardList}</div>
    </div>
  );
}