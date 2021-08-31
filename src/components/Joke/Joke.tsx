import { CSSProperties } from 'react';

interface IJoke {
  text: string;
}

const Joke = (props: IJoke) => {
  const { text } = props;

  return <div style={style}>{text}</div>;
};

const style: CSSProperties = {
  color: '#403F45',
  fontSize: '30px',
};

export default Joke;
