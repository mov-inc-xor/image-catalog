import {useState} from "react";

type Image = {
  id: string,
  srcs: string[],
  tag: string,
  complex: boolean,
}

const useGiphy = (api_key: string) => {

  const [images, setImages] = useState<Image[]>([]);

  const load = (...tags: string[]) => {
    const url = (tag: string) => `https://api.giphy.com/v1/gifs/random?api_key=${api_key}&tag=${tag}`;

    const NOT_FOUND = 'По тегу ничего не найдено';

    return new Promise((resolve, reject) => {
      const promises = tags.map(tag => fetch(url(tag)));

      Promise.all(promises)
        .then(responses => Promise.all(responses.map(response => response.json())))
        .then(jsons => jsons.filter(json => json.data.image_url))
        .then(jsons => {
          if (jsons.length !== promises.length) {
            throw NOT_FOUND;
          }
          return jsons;
        })
        .then(jsons => ({
          id: jsons.reduce((acc, json) => acc + json.data.id, ''),
          srcs: jsons.reduce((acc, json) => [...acc, json.data.image_url], []),
          tag: tags.map(tag => tag.trim().toLowerCase()).join(', '),
          complex: tags.length > 1,
        }))
        .then(img => {
            const newImages = [img, ...images];
            setImages(newImages);
            resolve(newImages);
          }
        )
        .catch(reason => {
          reject(reason === NOT_FOUND ? reason : 'Произошла HTTP ошибка');
        });
    });
  };

  const clear = () => {
    setImages([]);
  };

  const group = () => {
    const map = new Map();
    for (const image of images) {
      if (!map.get(image.tag)) {
        map.set(image.tag, []);
      }
      map.set(image.tag, [...map.get(image.tag), image]);
    }
    return Array.from(map.entries());
  };

  return {
    images,
    load,
    clear,
    group,
  };
};

export default useGiphy;