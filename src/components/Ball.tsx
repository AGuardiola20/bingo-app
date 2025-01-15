type BallProps = {
  number: number;
};

const Ball = ({ number }: BallProps) => {
  return (
    <div>
      <h1>{number}</h1>
    </div>
  );
};

export default Ball;
