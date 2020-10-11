import { Button, TextField } from "@material-ui/core";
import { Formik } from "formik";
import React, { useCallback, useEffect, useState } from "react";
import "./App.css";
import Select from "./components/Select";
import { FFXIVApi } from "./services/api";

function App() {
  const [servers, setServers] = useState<string[]>([]);
  const [formattedServers, setFormattedServers] = useState<
    { label: string; value: string }[]
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
      console.log(characterResponse);
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
    </div>
  );
}

export default App;
