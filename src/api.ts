const baseUrl = "http://localhost:3001/";

const get = (url: string) =>
    fetch(`${baseUrl}${url}`).then((response) => response.json());

const post = (url: string, requestData: Record<string, any>) =>
    fetch(`${baseUrl}${url}`, {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(requestData),
    }).then((response) => response.json());

const api = { get, post };

export default api;
