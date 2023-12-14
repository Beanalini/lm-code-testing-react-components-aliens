import FormErrorMessage from "./FormErrorMessage";
interface BeingsNumberProps {
  beingsNumber: string;
  onChangeBeingsNumber: (value: string) => void;
  validate: (validate: string) => Array<string>;
}

const BeingsNumber: React.FC<BeingsNumberProps> = ({
  beingsNumber,
  onChangeBeingsNumber,
  validate,
}) => {
  return (
    <>
      <div>
        <label htmlFor="beingsNumber">Number of beings:</label>
        <input
          id="beingsNumber"
          type="text"
          value={beingsNumber}
          onChange={(e) => onChangeBeingsNumber(e.target.value)}
        />
      </div>
      <FormErrorMessage errMessage={validate(beingsNumber)} />
    </>
  );
};

export default BeingsNumber;
