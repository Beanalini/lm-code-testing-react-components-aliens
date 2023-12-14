export const validateTwoPlusTwo: (twoPlusTwo: string) => string[] = (
  twoPlusTwo
) => {
  //declare errorMessage array using the array constructor
  let errMessage = Array<string>();

  const error1 = "Incorrect answer!";

  if (twoPlusTwo === "Not 4") {
    errMessage = [...errMessage, error1];
  }

  console.log(errMessage);
  return errMessage;
};
