import { CSSProperties } from 'react';

interface ICheerUpButton {
  className: string;
  onClick: any;
}

const CheerUpButton = (props: ICheerUpButton) => {
  const { className, onClick } = props;

  return (
    <button className={className} onClick={onClick} style={style}>
      Yes, cheer me up
    </button>
  );
};

const style: CSSProperties = {
  backgroundColor: '#FDEC00',
  color: '#264D59',
  border: '2px solid #264D59',
  width: '325px',
  height: '96px',
  fontSize: '36px',
  borderRadius: '10px',
};

export default CheerUpButton;
