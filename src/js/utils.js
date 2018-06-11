function fetchData(url) {
  return fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return data;
    })
}

function fetchImg(url) {
  return fetch(url)
    .then((res) => {
      return res.blob();
    })
    .then((data) => {
      return data;
    })
}

export { fetchData, fetchImg };