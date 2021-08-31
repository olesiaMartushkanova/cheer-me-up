import { useState } from 'react';
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
    <div>
      <Title className='title' />
      <CheerUpButton className='button__cheer-up' onClick={onClickHandler} />
      <Joke className='joke' text={joke} />
    </div>
  );
};

export default App;
