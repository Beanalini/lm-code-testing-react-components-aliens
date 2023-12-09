interface BeingsNumberProps {
  beingsNumber: string;
  onChangeBeingsNumber: (value: string) => void;
}

const BeingsNumber: React.FC<BeingsNumberProps> = ({
  beingsNumber,
  onChangeBeingsNumber,
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
    </>
  );
};

export default BeingsNumber;
