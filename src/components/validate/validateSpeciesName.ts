export const error1 = "No numbers or special characters allowed!";
export const error2 = "Name must be between 3 and 23 characters only!";
export const validateSpeciesName: (speciesName: string) => string[] = (
  speciesName
) => {
  //declare errorMessage array using the array constructor
  let errMessage = Array<string>();

  const pattern = /[^a-zA-Z\s]/;

  if (pattern.test(speciesName)) {
    errMessage = [...errMessage, error1];
  }
  if (
    (speciesName.length > 0 && speciesName.length < 3) ||
    speciesName.length > 23
  )
    errMessage = [...errMessage, error2];
  console.log(errMessage);
  return errMessage;
};
