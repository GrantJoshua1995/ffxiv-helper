import { Button, List, TextField } from "@material-ui/core";
import { Formik } from "formik";
import React, { useCallback, useEffect, useState } from "react";
import "./App.css";
import ListItem from "./components/ListItem";
import Select from "./components/Select";
import { FFXIVApi } from "./services/api";

function App() {
  const [servers, setServers] = useState<string[]>([]);
  const [formattedServers, setFormattedServers] = useState<
    { label: string; value: string }[]
  >([]);
  const [characterList, setCharacterList] = useState<
    { Avatar: string; Name: string }[]
  >([]);

  useEffect(() => {
    FFXIVApi.fetchServerList().then((serverList) => {
      setServers(serverList);
    });
  }, []);

  useEffect(() => {
    // clear out duplicates
    const uniqueServers = Array.from(new Set(servers));
    uniqueServers.forEach((uniqueServer) => {
      setFormattedServers((formattedServers) => [
        ...formattedServers,
        { label: uniqueServer, value: uniqueServer },
      ]);
    });
  }, [servers]);

  const searchCharacter = useCallback(
    async (values: { characterName: string; server: string }) => {
      const characterResponse = await FFXIVApi.fetchCharacter({
        name: values.characterName,
        server: values.server,
      });
      setCharacterList(characterResponse.Results);
    },
    []
  );

  return (
    <div className="App">
      <Formik
        initialValues={{ characterName: "", server: "" }}
        onSubmit={searchCharacter}
      >
        {({ handleChange, handleSubmit, values }) => (
          <form onSubmit={handleSubmit}>
            <TextField
              label="Character name"
              onChange={handleChange}
              value={values.characterName}
              name="characterName"
            />
            <Select
              name="server"
              value={values.server}
              placeholder="Server"
              handleChange={handleChange}
              options={formattedServers}
            />
            <Button type="submit" color="primary" variant="contained">
              Search
            </Button>
          </form>
        )}
      </Formik>
      {characterList.length > 0 && (
        <List>
          {characterList.map((character) => {
            return (
              <ListItem imageUrl={character.Avatar} header={character.Name} />
            );
          })}
        </List>
      )}
    </div>
  );
}

export default App;
