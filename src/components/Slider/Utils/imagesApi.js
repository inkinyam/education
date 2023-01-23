export const getImages = (length = 10) => {
  return fetch(` http://jsonplaceholder.typicode.com/photos`)
    .then((response) => response.json())
    .then((response) => {
      const images = [];
      response.forEach((c) => {
        const title = c?.title;
        const url = c?.url;

        images.push({ title, url });
      });
      return images.slice(0, length); 
    });
};