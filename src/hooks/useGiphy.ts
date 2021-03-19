import {useState} from "react";

type Image = {
  ids: string[],
  srcs: string[],
  tags: string[],
  complex: boolean,
}

const useGiphy = (api_key: string) => {

  const [images, setImages] = useState<Image[]>([]);

  const load = (...tags: string[]) => {
    const url = (tag: string) => `https://api.giphy.com/v1/gifs/random?api_key=${api_key}&tag=${tag}`;

    const NOT_FOUND = 'По тегу ничего не найдено';

    return new Promise((resolve, reject) => {
      const promises = tags.map(tag => fetch(url(tag))
        .then(response => response.json())
        .then(json => ({tag, ...json})));

      Promise.all(promises)
        // .then(responses => Promise.all(responses.map(response => response.json())))
        .then(jsons => jsons.filter(json => json.data.image_url))
        .then(jsons => {
          if (jsons.length !== promises.length) {
            throw NOT_FOUND;
          }
          return jsons;
        })
        .then(jsons => ({
          ids: jsons.map(json => json.data.id),
          srcs: jsons.map(json => json.data.image_url),
          tags: jsons.map(json => json.tag),
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

    images.forEach(image => (
      image.tags.forEach((tag, i) => {
          const ids = [image.ids[i]];
          const srcs = [image.srcs[i]];
          const tags = [image.tags[i]];

          const replaced = {...image, ids, srcs, tags};

          map.get(tag) ?
            map.set(tag, [...map.get(tag), replaced]) :
            map.set(tag, [replaced]);
        }
      )));

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