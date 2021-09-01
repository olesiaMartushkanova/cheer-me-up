import { CSSProperties, useState } from 'react';
import Chuck from './utils/chuck_norris.png';

import CheerUpButton from './components/CheerUpButton/CheerUpButton';
import Joke from './components/Joke/Joke';
import Title from './components/Title/Title';
import { getRandomJoke } from './utils/getRandomJoke';

const App = () => {
  const [joke, setJoke] = useState('');
  const [text, setText] = useState('Do you feel sad today?');

  const onClickHandler = async () => {
    const jokeFromResponse = await getRandomJoke();
    setJoke(jokeFromResponse);
    setText('Still sad?');
  };

  return (
    <div style={appStyle}>
      <img
        src={Chuck}
        style={{ width: '200px', height: 'auto', marginBottom: '20px' }}
      />
      <Title text={text} />
      <CheerUpButton onClick={onClickHandler} />
      <Joke text={joke} />
    </div>
  );
};

const appStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap',
  marginTop: '30px',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
};

export default App;
