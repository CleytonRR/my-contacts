class HttpClient {
  async get(url) {
    const response = await fetch(url);

    return response.json();
  }
}

export default new HttpClient();
