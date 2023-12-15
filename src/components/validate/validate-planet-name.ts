export const error1 = "No special characters allowed!";
export const error2 = "Planet name must be between 2 and 49 characters only!";

export const validatePlanetName: (planetName: string) => string[] = (
  planetName
) => {
  //declare errorMessage array using the array constructor
  let errMessage = Array<string>();

  const pattern = /[^a-zA-Z\d\s]/;

  const planetNameLength = planetName.length;

  if (pattern.test(planetName)) {
    errMessage = [...errMessage, error1];
  }
  if ((planetNameLength > 0 && planetNameLength < 2) || planetNameLength > 49)
    errMessage = [...errMessage, error2];
  console.log(errMessage);
  return errMessage;
};
