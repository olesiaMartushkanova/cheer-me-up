interface ICheerUpButton {
  text: string;
  className: string;
  onClick: any;
}

const CheerUpButton = (props: ICheerUpButton) => {
  const { text, className, onClick } = props;

  return (
    <button className={className} onClick={onClick}>
      {text}
    </button>
  );
};

export default CheerUpButton;
