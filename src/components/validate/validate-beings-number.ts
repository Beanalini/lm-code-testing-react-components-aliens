export const validateBeingsNumber: (beingsNumber: string) => string[] = (
  beingsNumber
) => {
  //declare errorMessage array using the array constructor
  let errMessage = Array<string>();

  const pattern = /[^0-9]/g;
  const error1 = "No special characters allowed!";
  const error2 = "Minimum number of beings is 1000000000";
  //   const planetNameLength = beingsNumber.length;

  if (pattern.test(beingsNumber)) {
    errMessage = [...errMessage, error1];
  }
  if (parseInt(beingsNumber) < 1000000000) errMessage = [...errMessage, error2];
  console.log(errMessage);
  return errMessage;
};
