export const error1 = "No special characters allowed!";
export const error2 = "Minimum number of beings is 1000000000";

export const validateBeingsNumber: (beingsNumber: string) => string[] = (
  beingsNumber
) => {
  //declare errorMessage array using the array constructor
  let errMessage = Array<string>();

  const pattern = /[^0-9]/;

  if (pattern.test(beingsNumber)) errMessage = [...errMessage, error1];

  if (
    pattern.test(beingsNumber) !== true &&
    parseInt(beingsNumber) < 1000000000
  )
    errMessage = [...errMessage, error2];

  return errMessage;
};
