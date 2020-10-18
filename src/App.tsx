import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import CharacterSearch from "./pages/CharacterSearch";

function App() {
  return (
    <main>
      <Switch>
        <Route path="/characters" component={CharacterSearch} />
      </Switch>
    </main>
  );
}

export default App;
