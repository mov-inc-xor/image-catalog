import React, {useEffect, useState} from "react";
import '../scss/index.scss';

import useGiphy from "../hooks/useGiphy";
import TextField from "../components/TextField/TextField";
import Button from "../components/Button/Button";
import ButtonSwitcher from "../components/ButtonSwitcher/ButtonSwitcher";
import Image from "../components/Image/Image";
import useTextFieldWithFilter from "../hooks/useTextFieldWithFilter";

function MainPage() {
  const giphy = useGiphy('gTJAO48YcpmrADUyo4opy4ES4g7iDBxx');

  const [loading, setLoading] = useState(false);
  const [grouped, setGrouped] = useState(false);

  const textFieldWithFilter = useTextFieldWithFilter((text) => text
    .replaceAll(/[^A-Za-z,]/g, '')
    .replaceAll(/,+/g, ',')
    .toLowerCase());

  useEffect(() => {
    if (textFieldWithFilter.value !== 'delay') {
      return;
    }

    const delay = () => {
      const tags = ['cat', 'dog', 'mouse', 'frog', 'human'];
      const randomTag = tags[Math.floor(Math.random() * (tags.length - 1))];

      setLoading(true);
      giphy.load(randomTag).catch(reason => {
        alert(reason);
        setLoading(false);
      });
    }

    const timer = setTimeout(delay, 5000);

    return () => clearTimeout(timer);
  }, [giphy, textFieldWithFilter])

  const load = () => {
    if (!textFieldWithFilter.value) {
      alert('Заполните поле "Тег"');
      return;
    }

    setLoading(true);
    textFieldWithFilter.setValue('');
    giphy.load(...textFieldWithFilter.value.split(',')).catch(reason => {
      alert(reason);
      setLoading(false);
    });
  };

  const clear = () => {
    giphy.clear();
    setLoading(false);
    textFieldWithFilter.setValue('');
  };

  const switchGrouped = () => {
    setGrouped(!grouped);
  };

  const onImageClick = (tag: string) => {
    textFieldWithFilter.setValue(tag);
  };

  return (
    <div className='page-container'>
      <div className='page-controls'>
        <TextField {...textFieldWithFilter.bind} placeholder='Введите теги через запятую'/>

        <div className='buttons'>
          <Button primary disabled={loading} onClick={load}>{loading ? 'Загрузка...' : 'Загрузить'}</Button>
          <Button secondary onClick={clear}>Очистить</Button>
          <ButtonSwitcher on={'Разгруппировать'} off={'Группировать'} onSwitch={switchGrouped}/>
        </div>
      </div>

      <div className='images-grid'>
        {grouped ? giphy.group().map(([tag, images], group_index) => (
          <div key={group_index} className='group'>
            <h4>{tag}</h4>
            <div className='group-container'>
              {images.map((image: any) => (
                <Image onClick={() => onImageClick(image.tag)} onLoad={() => setLoading(false)} key={image.id}
                       srcs={image.srcs}/>
              ))}
            </div>
          </div>
        )) : giphy.images.map(image => (
          <Image onClick={() => onImageClick(image.tag)} onLoad={() => setLoading(false)} key={image.id}
                 srcs={image.srcs}/>
        ))}
      </div>
    </div>
  );
}

export default MainPage;