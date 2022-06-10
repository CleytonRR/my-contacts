class HttpClient {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  async get(path) {
    const response = await fetch(`${this.baseURL}${path}`);

    if (response.ok) {
      return response.json();
    }

    throw new Error('Erro na API!');
  }
}

export default HttpClient;
