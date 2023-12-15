import { validateTwoPlusTwo, error1 } from "./validate-two-plus-two";

describe("Testing validateTwoPlusTwo validation function", () => {
  test("Given the required props When the input is the valid answer  Then the error message array should be empty", () => {
    expect(validateTwoPlusTwo("4")).toEqual([]);
  });

  test("Given the required props When the input is the invalid answer  Then the error message should contain an error message", () => {
    expect(validateTwoPlusTwo("Not 4")).toEqual([error1]);
    expect(validateTwoPlusTwo("apples")).toEqual([error1]);
  });
});
