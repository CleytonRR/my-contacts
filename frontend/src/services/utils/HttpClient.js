class HttpClient {
  async get(path) {
    const response = await fetch(`http://localhost:3000${path}`);

    return response.json();
  }
}

export default new HttpClient();
