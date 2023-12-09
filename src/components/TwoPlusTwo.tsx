interface iQTestProps {
  result: string;
  onChangeIQTest: (value: string) => void;
}

const TwoPlusTwo: React.FC<iQTestProps> = ({ result, onChangeIQTest }) => {
  return (
    <>
      <div>
        <label htmlFor="iQTest">What is 2 + 2?</label>
        <select
          id="iQTest"
          name="iQTest"
          value={result}
          onChange={(e) => onChangeIQTest(e.target.value)}
        >
          <option value="4">4</option>
          <option value="Not 4">Not 4</option>
        </select>
      </div>
    </>
  );
};

export default TwoPlusTwo;
