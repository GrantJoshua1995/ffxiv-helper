import { Button, List, TextField } from "@material-ui/core";
import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import React, { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import ListItem from "../../components/ListItem";
import Select from "../../components/Select";
import { FFXIVApi } from "../../services/api";
import { fetchServersStart, fetchServersSuccess } from "../../store/servers";
const CharacterSearch = () => {
  const dispatch = useDispatch();
  const servers = useSelector((state: { servers: string[] }) => state.servers);
  const [formattedServers, setFormattedServers] = useState<
    { label: string; value: string }[]
  >([]);
  const [characterList, setCharacterList] = useState<
    { Avatar: string; Name: string; ID: string }[]
  >([]);

  const fetchServerList = useCallback(async () => {
    dispatch(fetchServersStart());
    const serverList = await FFXIVApi.fetchServerList();
    dispatch(fetchServersSuccess(serverList));
  }, [dispatch]);

  useEffect(() => {
    fetchServerList();
  }, [fetchServerList]);

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

  const history = useHistory();
  return (
    <>
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
              <ListItem
                onClick={() => history.push(`/characters/${character.ID}`)}
                button={true}
                imageUrl={character.Avatar}
                header={character.Name}
              />
            );
          })}
        </List>
      )}
    </>
  );
};

export default CharacterSearch;
