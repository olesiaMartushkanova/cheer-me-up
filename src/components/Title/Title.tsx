interface ITitle {
  className: string;
  text: string;
}

const Title = (props: ITitle) => {
  const { className, text } = props;

  return <div className={className}>{text}</div>;
};

export default Title;
