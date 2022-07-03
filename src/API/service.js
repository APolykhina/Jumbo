import axios from "axios";

// custom API service
class ApiService {
  constructor() {
    this.request = axios.create({
      baseURL: "https://api.jsonstorage.net/v1/json",
    });
  }

  get(path) {
    return this.request.get(path);
  }
}

export const apiService = new ApiService();
