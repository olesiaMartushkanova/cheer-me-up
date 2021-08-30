import CheerUpButton from './components/CheerUpButton/CheerUpButton';
import Title from './components/Title/Title';

const App = () => {
  const onClickHandler = () => {
    console.log('On click...');
  };

  return (
    <div>
      <Title className='title' text='Do you feel sad today?' />
      <CheerUpButton
        className='button__cheer-up'
        text='Yes, cheer me up'
        onClick={onClickHandler}
      />
    </div>
  );
};

export default App;
