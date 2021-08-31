import { CSSProperties, useState } from 'react';
import { css } from '@emotion/css';
import Chuck from './utils/chuck_norris.png';

import CheerUpButton from './components/CheerUpButton/CheerUpButton';
import Joke from './components/Joke/Joke';
import Title from './components/Title/Title';
import { getRandomJoke } from './utils/getRandomJoke';

const App = () => {
  const [joke, setJoke] = useState('');

  const onClickHandler = async () => {
    const jokeFromResponse = await getRandomJoke();
    setJoke(jokeFromResponse);
  };

  return (
    <div style={appStyle}>
      <img src={Chuck} style={{ width: '200px', height: 'auto' }} />
      <Title
        className={css`
           {
            margin-top: 30px;
          }
        `}
      />
      <CheerUpButton className='button__cheer-up' onClick={onClickHandler} />
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
