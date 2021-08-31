import { CSSProperties } from 'react';

interface ITitle {
  className: string;
}

const Title = (props: ITitle) => {
  const { className } = props;

  return (
    <div className={className} style={style}>
      Do you feel sad today?
    </div>
  );
};

const style: CSSProperties = {
  color: '#403F45',
  fontSize: '40px',
  textAlign: 'center',
};

export default Title;
