import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { listDecks } from "../utils/api/index"
import Header from "./Header";
import NotFound from "./NotFound";
import DeckList from "../Home/DeckList";
import { Decks } from "../Decks";


function Layout() {
  const [decks, setDecks] = useState([]);
  
  useEffect(() => {
    async function loadDecks() {
      const decksFromAPI = await listDecks();
      setDecks(decksFromAPI);
    }

    loadDecks();
  }, [])

  return (
    <>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/">
            <DeckList decks={decks} />
          </Route>

          <Route path="/decks">
            <Decks decks={decks} />
          </Route> 

          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default Layout;
