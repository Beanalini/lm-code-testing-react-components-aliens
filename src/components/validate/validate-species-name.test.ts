import { validateSpeciesName, error1, error2 } from "./validateSpeciesName";

describe("Test validateSpeciesName function", () => {
  test("Given the required props When the input is the valid number of characters Then the error message array should be empty", () => {
    expect(validateSpeciesName("Daleks")).toEqual([]);
    expect(validateSpeciesName("The TimeLords")).toEqual([]);
    expect(validateSpeciesName("Ood")).toEqual([]);
    expect(validateSpeciesName("Sister of Plenitudeee")).toEqual([]);
  });

  test("Given the required props When the input is the invalid number of characters Then the error message array should contain error2", () => {
    expect(validateSpeciesName("Io")).toEqual([error2]);
    expect(validateSpeciesName("The TimeLords The TimeLords")).toEqual([
      error2,
    ]);
    expect(validateSpeciesName("I")).toEqual([error2]);
  });

  test("Given the required props When the input includes special characters or numbers Then  the error message array should contain error1", () => {
    expect(validateSpeciesName("Daleks2000")).toEqual([error1]);
    expect(validateSpeciesName("The % TimeLords!")).toEqual([error1]);
    expect(validateSpeciesName("Ood 650!")).toEqual([error1]);
    expect(validateSpeciesName("Blathereen65!")).toEqual([error1]);
  });
  test("Given the required props When the input includes special characters or numbers and an invalid character length Then  the error message array should contain error1 and error2", () => {
    expect(validateSpeciesName("Daleks2000??? ???&&££$7878")).toEqual([
      error1,
      error2,
    ]);
    expect(validateSpeciesName("The % TimeLords! 20202020")).toEqual([
      error1,
      error2,
    ]);
    expect(validateSpeciesName("*5")).toEqual([error1, error2]);
    expect(validateSpeciesName("£££56Sister of Plenitude!?!")).toEqual([
      error1,
      error2,
    ]);
  });
});
