const baseUrl = "http://localhost:3001/";

const get = (url: string) =>
    fetch(`${baseUrl}${url}`).then((response) => response.json());

const postOrPut = (url: string, method: string, requestData: Record<string, any>) =>
    fetch(`${baseUrl}${url}`, {
        method: method,
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(requestData),
    }).then((response) => response.json());

const post = (url: string, requestData: Record<string, any>) =>
    postOrPut(url, "POST", requestData);

const put = (url: string, requestData: Record<string, any>) =>
    postOrPut(url, "PUT", requestData);

const api = { get, post, put };

export default api;
