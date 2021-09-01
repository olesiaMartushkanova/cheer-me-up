import { CSSProperties } from 'react';

interface ITitle {
  text: string;
}

const Title = (props: ITitle) => {
  const { text } = props;

  return <div style={style}>{text}</div>;
};

const style: CSSProperties = {
  color: '#403F45',
  fontSize: '40px',
};

export default Title;
