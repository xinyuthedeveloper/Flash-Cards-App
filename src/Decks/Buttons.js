import { Link } from "react-router-dom";

function Buttons({ deck, deleteDeckHandler }) {
    return (
    <div className="row mb-5">
        <div className="btns d-flex flex-row col-8">
            <Link className="btn btn-secondary m-2" to={`/decks/${deck.id}/edit`}>
                Edit Deck
            </Link>
            <Link className="btn btn-primary m-2" to={`/decks/${deck.id}/study`}>
                Study
            </Link>
            <Link className="btn btn-primary m-2" to={`/decks/${deck.id}/cards/new`}>
                Add Cards
            </Link>
        </div>
        <div className="d-flex flex-row-reverse col-4">
            <button
                className="btn btn-danger m-2"
                onClick={() => deleteDeckHandler(deck.id)}
            >
                Delete Deck
            </button>
        </div>
    </div>
    )
}

export default Buttons;