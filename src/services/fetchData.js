const fetchData = (url, callback) => {
    return fetch(url)
        .then((response) => response.json())
        .then((data) => callback(data))
        .catch((error) => console.log('Не удалось загрузить', error))
};

export { fetchData };