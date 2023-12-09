interface iQTestProps {
  twoPlusTwo: string;
  onChangeTwoPlusTwo: (value: string) => void;
}

const TwoPlusTwo: React.FC<iQTestProps> = ({
  twoPlusTwo,
  onChangeTwoPlusTwo,
}) => {
  return (
    <>
      <div>
        <label htmlFor="iQTest">What is 2 + 2?</label>
        <select
          id="iQTest"
          name="iQTest"
          value={twoPlusTwo}
          onChange={(e) => onChangeTwoPlusTwo(e.target.value)}
        >
          <option value="4">4</option>
          <option value="Not 4">Not 4</option>
        </select>
      </div>
    </>
  );
};

export default TwoPlusTwo;
