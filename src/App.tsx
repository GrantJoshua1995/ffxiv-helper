import React, { useEffect, useState } from "react";
import "./App.css";
import Select from "./components/Select";
import { FFXIVApi } from "./services/api";

function App() {
  const [servers, setServers] = useState<{ value: string; label: string }[]>(
    []
  );
  const [selectedServer, setSelectedServer] = useState<unknown>("");
  useEffect(() => {
    FFXIVApi.serverFetch().then((serversResponse) => {
      serversResponse.forEach((serverResponse: string) => {
        setServers((servers) => [
          ...servers,
          { label: serverResponse, value: serverResponse },
        ]);
      });
    });
  }, []);

  const handleChange = (e: React.ChangeEvent<{ value: unknown }>) => {
    setSelectedServer(e.target.value);
  };

  return (
    <div className="App">
      <Select
        value={selectedServer}
        placeholder="Server"
        handleChange={handleChange}
        options={servers}
      />
    </div>
  );
}

export default App;
