import React from "react";
import { Link } from "react-router-dom";

function DeckView({ deck, handleDeckDelete }) {

    return (
        <div key={deck.id} className="card">
            <div key={deck.id} className="card-body">
                <h5 className="card-title">{deck.name}</h5>
                <h6 className="card-subtitle">
                    {deck.cards.length} cards
                </h6>
                <p className="card-text">{deck.description}</p>
                <Link 
                    to={`decks/${deck.id}`} 
                    className="btn btn-secondary"
                >
                    View
                </Link>
                <Link 
                    to={`/decks/${deck.id}/study`} 
                    className="btn btn-primary"
                >
                    Study
                </Link>
                <button 

                    className="btn btn-danger float-right" 
                    onClick={() => handleDeckDelete(deck.id)}
                >
                    Delete
                </button>
            </div>
        </div>
    );
}

export default DeckView;