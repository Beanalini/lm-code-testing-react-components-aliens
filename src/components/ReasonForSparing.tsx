import FormErrorMessage from "./FormErrorMessage";
interface ReasonForSparingProps {
  reasonForSparing: string;
  onChangeReasonForSparing(value: string): void;
  validate: (validate: string) => Array<string>;
}

const ReasonForSparing: React.FC<ReasonForSparingProps> = ({
  reasonForSparing,
  onChangeReasonForSparing,
  validate,
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
      <FormErrorMessage errMessage={validate(reasonForSparing)} />
    </>
  );
};

export default ReasonForSparing;
