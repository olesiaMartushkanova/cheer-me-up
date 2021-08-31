interface ITitle {
  className: string;
}

const Title = (props: ITitle) => {
  const { className } = props;

  return <div className={className}>Do you feel sad today?</div>;
};

export default Title;
