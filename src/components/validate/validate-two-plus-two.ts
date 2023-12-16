export const error1 = "Incorrect answer!";

export const validateTwoPlusTwo: (twoPlusTwo: string) => string[] = (
  twoPlusTwo
) => {
  //declare errorMessage array using the array constructor
  let errMessage = Array<string>();

  if (twoPlusTwo !== "4") {
    errMessage = [...errMessage, error1];
  }

  return errMessage;
};
