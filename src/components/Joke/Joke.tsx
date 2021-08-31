import { CSSProperties } from 'react';

interface IJoke {
  className: string;
  text: string;
}

const Joke = (props: IJoke) => {
  const { className, text } = props;

  return (
    <div className={className} style={style}>
      {text}
    </div>
  );
};

const style: CSSProperties = {
  color: '#403F45',
  fontSize: '30px',
  textAlign: 'center',
};

export default Joke;
