interface IJoke {
  className: string;
}

const Joke = (props: IJoke) => {
  const { className } = props;

  return <div className={className}></div>;
};

export default Joke;
