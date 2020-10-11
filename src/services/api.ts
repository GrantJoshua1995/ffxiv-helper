import axios, { AxiosInstance } from "axios";

class ApiClient {
  constructor(apiUrl: string) {
    this.client = axios.create({
      baseURL: apiUrl,
    });
  }
  private client: AxiosInstance;

  async fetchServerList(): Promise<any> {
    const serversResponse = await this.client.get("/servers");

    return serversResponse.data;
  }

  async fetchCharacter(fetchCharacterRequest: fetchCharacterRequest) : Promise<any> {
    const characterResponse = await this.client.get("/character/search", {params: {
      name: fetchCharacterRequest.name,
      server : fetchCharacterRequest.server
    }})

    return characterResponse.data;
  }
}

interface fetchCharacterRequest {
  name: string;
  server: string;
}

export const FFXIVApi = new ApiClient("https://xivapi.com/");
