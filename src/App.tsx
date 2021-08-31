import CheerUpButton from './components/CheerUpButton/CheerUpButton';
import Joke from './components/Joke/Joke';
import Title from './components/Title/Title';
import { getRandomJoke } from './utils/getRandomJoke';

const App = () => {
  const onClickHandler = async () => {
    console.log('On click...');
    await getRandomJoke();
  };

  return (
    <div>
      <Title className='title' />
      <CheerUpButton className='button__cheer-up' onClick={onClickHandler} />
      <Joke className='joke' />
    </div>
  );
};

export default App;
