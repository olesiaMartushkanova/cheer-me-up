interface ICheerUpButton {
  className: string;
  onClick: any;
}

const CheerUpButton = (props: ICheerUpButton) => {
  const { className, onClick } = props;

  return (
    <button className={className} onClick={onClick}>
      Yes, cheer me up
    </button>
  );
};

export default CheerUpButton;
