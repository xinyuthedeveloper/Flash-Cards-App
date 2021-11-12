import React from "react";
import { Link } from "react-router-dom";

function CardView({ card, deck, deleteCardHandler }) {
  return (
    <div className="card w-100" key={card.id}>
      <div className="card-body">
        <h5 className="card-title">{card.name}</h5>
        <h6 className="text-muted">Front</h6>
        <p className="card-text w-40">{card.front}</p>
        <hr />
        <h6 className="text-muted">Back</h6>
        <p className="card-text w-40">{card.back}</p>
          <div className="d-flex flex-row-reverse">
            <button
              className="btn btn-danger ml-2"
              onClick={() => deleteCardHandler(card.id)}
            >
              Delete
            </button>
            <Link
              className="btn btn-secondary ml-2"
              to={`/decks/${deck.id}/cards/${card.id}/edit`}
            >
              Edit
            </Link>
          </div>
      </div>
    </div>
  )
}

export default CardView;