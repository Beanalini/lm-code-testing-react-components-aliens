interface DisplayFormInputProps {
  speciesName: string;
  planetName: string;
  beingsNumber: string;
  reasonsForSparing: string;
  displayFormInput: boolean;
}

const DisplayFormInput: React.FC<DisplayFormInputProps> = ({
  speciesName,
  planetName,
  beingsNumber,
  reasonsForSparing,
  displayFormInput,
}) => {
  return (
    <>
      {displayFormInput && (
        <div>
          <h3> Submitted Data</h3>
          <li> Species name: {speciesName}</li>
          <li> Planet name: {planetName}</li>
          <li> Number of beings: {beingsNumber}</li>
          <li> Reasons for Sparing: {reasonsForSparing}</li>
        </div>
      )}
    </>
  );
};

export default DisplayFormInput;
