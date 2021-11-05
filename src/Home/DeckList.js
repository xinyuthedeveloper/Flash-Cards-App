import React  from "react"
import { Link, useHistory } from "react-router-dom";
import { deleteDeck } from "../utils/api";
import DeckView from "./DeckView";

function DeckList({ decks }) {
    // Creating a deck delete handler to delete the deckview from homepage
    const history = useHistory();
    const handleDeckDelete = (deckId) => {
        const confirmed = window.confirm(`Delete this deck? \n\nYou will not be able to recover it.`);
        if (confirmed) {
            deleteDeck(deckId);
            history.go(0);
        }
    }

    // list the DeckView compoments for the decks array
    const list = decks.map((deck, index) => (
        <DeckView key={index} deck={deck} handleDeckDelete={handleDeckDelete}/>
    ));

    return (
        <section>
            <Link to="/decks/new" className="btn btn-secondary">
                Create Deck
            </Link>
            {list}
        </section>
    )
}

export default DeckList;