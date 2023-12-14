import FormErrorMessage from "./FormErrorMessage";

interface TwoPlusTwoProps {
  twoPlusTwo: string;
  onChangeTwoPlusTwo: (value: string) => void;
  validate: (validate: string) => Array<string>;
}

const TwoPlusTwo: React.FC<TwoPlusTwoProps> = ({
  twoPlusTwo,
  onChangeTwoPlusTwo,
  validate,
}) => {
  return (
    <>
      <div>
        <label htmlFor="twoPlusTwo">What is 2 + 2?</label>
        <select
          id="twoPlusTwo"
          name="twoPlusTwo"
          value={twoPlusTwo}
          onChange={(e) => onChangeTwoPlusTwo(e.target.value)}
        >
          <option value="4">4</option>
          <option value="Not 4">Not 4</option>
        </select>
      </div>
      <FormErrorMessage errMessage={validate(twoPlusTwo)} />
    </>
  );
};

export default TwoPlusTwo;
