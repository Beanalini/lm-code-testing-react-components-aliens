import { validatePlanetName, error1, error2 } from "./validate-planet-name";

describe("Test validatePlanetName", () => {
  test("Given the required props When the input is the valid number of characters Then the error message array should be empty", () => {
    expect(validatePlanetName("6skaro")).toEqual([]);
    expect(validatePlanetName("Mondas 5")).toEqual([]);
    expect(validatePlanetName("Skaro")).toEqual([]);
    expect(validatePlanetName("Raxacoricofallapatoriu")).toEqual([]);
    expect(validatePlanetName("885588")).toEqual([]);
  });

  test("Given the required props When the input includes special characters Then  the error message array should contain error1", () => {
    expect(validatePlanetName("6skaro$$")).toEqual([error1]);
    expect(validatePlanetName("Mondas 5**")).toEqual([error1]);
    expect(validatePlanetName("!$$%%")).toEqual([error1]);
    expect(validatePlanetName("!Skaro!")).toEqual([error1]);
  });

  test("Given the required props When the input is the invalid number of characters Then the error message array should contain error2", () => {
    const testString = [...Array(5).fill("Tranzalore ")].join("");
    expect(validatePlanetName("6")).toEqual([error2]);
    expect(validatePlanetName(testString)).toEqual([error2]);
    expect(validatePlanetName("I")).toEqual([error2]);
  });

  test("Given the required props When the input includes special characters and an invalid character length Then  the error message array should contain error1 and error2", () => {
    const testString = [...Array(5).fill("Tranzalore **")].join("");
    expect(validatePlanetName("!")).toEqual([error1, error2]);
    expect(validatePlanetName(testString)).toEqual([error1, error2]);
  });
});
