import axios, { AxiosInstance } from "axios";

class ApiClient {
  constructor(apiUrl: string) {
    this.client = axios.create({
      baseURL: apiUrl,
    });
  }
  private client: AxiosInstance;

  async serverFetch(): Promise<any> {
    const serverFetch = await this.client.get("/servers");

    return serverFetch.data;
  }
}

export const FFXIVApi = new ApiClient("https://xivapi.com/");
