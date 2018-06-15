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

function paginateCharacterData(data, paginationScheme) {
  const characterKeys = Object.keys(data);
  return characterKeys.reduce((newCharacterData, key) => {
    newCharacterData[key] = {...data[key], page: paginationScheme[key]};
    return newCharacterData;
  }, {});
}

export { fetchData, fetchImg, paginateCharacterData };