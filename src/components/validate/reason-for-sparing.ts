export const error1 = "Your reason must be between 17 and 153 characters.";
export const validateReasonForSparing: (
  reasonForSparing: string
) => string[] = (reasonForSparing) => {
  //declare errorMessage array using the array constructor
  let errMessage = Array<string>();

  const planetNameLength = reasonForSparing.length;

  if ((planetNameLength > 0 && planetNameLength < 17) || planetNameLength > 153)
    errMessage = [...errMessage, error1];

  return errMessage;
};
