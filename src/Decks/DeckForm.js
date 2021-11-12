import React from "react";
import { useHistory } from "react-router";

export function DeckForm({ submitFunction, deck = {}, changeName, changeDesc }) {
  const history = useHistory();

  return (
    <form>
      <div class="form-group">
        <label for="exampleFormControlInput1">Deck Name</label>
        <input
          type="text"
          class="form-control"
          id="exampleFormControlInput1"
          value={deck.name ? deck.name : ""}
          onChange={changeName}
        ></input>
      </div>
      <div class="form-group">
        <label for="exampleFormControlTextarea1">Deck Description</label>
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          value={deck.description ? deck.description : ""}
          onChange={changeDesc}
        ></textarea>
      </div>
      <button
        className="btn btn-secondary"
        type="button"
        onClick={() => history.go(-1)}
      >
        Cancel
      </button>
      <button
        className="btn btn-primary"
        type="submit"
        onClick={submitFunction}
      >
        Submit
      </button>
    </form>
  );
}