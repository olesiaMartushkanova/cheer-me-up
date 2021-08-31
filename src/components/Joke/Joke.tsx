interface IJoke {
  className: string;
  text: string;
}

const Joke = (props: IJoke) => {
  const { className, text } = props;

  return <div className={className}>{text}</div>;
};

export default Joke;
