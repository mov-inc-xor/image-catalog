import React from 'react';
import Button from "./components/Button/Button";
import ButtonSwitcher from "./components/ButtonSwitcher/ButtonSwitcher";
import TextField from "./components/TextField/TextField";

function App() {
  return (
    <div>
      <TextField filter={(text) => text.toUpperCase()} />
      <Button primary onClick={() => alert('hello')}>Загрузить</Button>
      <Button secondary>Очистить</Button>
      <ButtonSwitcher on={'Разгруппировать'} off={'Группировать'} onSwitch={() => alert('Ок')} />
    </div>
  );
}

export default App;
