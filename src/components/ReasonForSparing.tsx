interface ReasonForSparingProps {
  reasonForSparing: string;
  onChangeReasonForSparing(value: string): void;
}

const ReasonForSparing: React.FC<ReasonForSparingProps> = ({
  reasonForSparing,
  onChangeReasonForSparing,
}) => {
  return (
    <>
      <div>
        <label htmlFor="reasonForSparing">Reason for sparing</label>
        <textarea
          rows={4}
          cols={30}
          id="reasonForSparing"
          name="reasonForSparing"
          placeholder="Enter your reason here"
          value={reasonForSparing}
          onChange={(e) => onChangeReasonForSparing(e.target.value)}
        ></textarea>
      </div>
    </>
  );
};

export default ReasonForSparing;
