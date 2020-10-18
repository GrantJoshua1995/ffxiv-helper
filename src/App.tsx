import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import CharacterDetails from "./pages/CharacterDetails";
import CharacterSearch from "./pages/CharacterSearch";

function App() {
  return (
    <main>
      <Switch>
        <Route path="/characters/:id" component={CharacterDetails} />
        <Route path="/characters" component={CharacterSearch} />
      </Switch>
    </main>
  );
}

export default App;
