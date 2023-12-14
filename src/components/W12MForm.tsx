import { useState, MouseEvent } from "react";
import W12MHeader from "./W12MHeader";
import SpeciesName from "./SpeciesName";
import PlanetName from "./PlanetName";
import BeingsNumber from "./BeingsNumber";
import TwoPlusTwo from "./TwoPlusTwo";
import ReasonForSparing from "./ReasonForSparing";
import DisplayFormInput from "./DisplayFormInput";
import { validateSpeciesName } from "./validate/validateSpeciesName";
import { validatePlanetName } from "./validate/validate-planet-name";
import { validateBeingsNumber } from "./validate/validate-beings-number";
import { validateTwoPlusTwo } from "./validate/validate-two-plus-two";
import { validateReasonForSparing } from "./validate/reason-for-sparing";
const W12MForm = () => {
  const [speciesName, setSpeciesName] = useState<string>("");
  const [planetName, setPlanetName] = useState<string>("");
  const [beingsNumber, setBeingsNumber] = useState<string>("");
  const [twoPlusTwo, setTwoPlusTwo] = useState<string>("");
  const [reasonForSparing, setReasonForSparing] = useState<string>("");
  const [displayFormInput, setDisplayFormInput] = useState<boolean>(false);

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    //use state to display submit message
    //change state here on submit to display input data

    setDisplayFormInput(true);

    //use handler for validation later
  };

  const handleFormReset = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setSpeciesName("");
    setPlanetName("");
    setBeingsNumber("");
    setTwoPlusTwo("");
    setReasonForSparing("");
    setDisplayFormInput(false);
  };

  return (
    <section className="w12MForm">
      <W12MHeader />
      {/* REST OF FORM GOES HERE */}

      <form onSubmit={submitHandler} data-testid="form">
        <SpeciesName
          speciesName={speciesName}
          onChangeSpeciesName={(value) => setSpeciesName(value)}
          validate={validateSpeciesName}
        />

        <PlanetName
          planetName={planetName}
          onChangePlanetName={(value) => setPlanetName(value)}
          validate={validatePlanetName}
        />
        <BeingsNumber
          beingsNumber={beingsNumber}
          onChangeBeingsNumber={(value) => setBeingsNumber(value)}
          validate={validateBeingsNumber}
        />
        <TwoPlusTwo
          twoPlusTwo={twoPlusTwo}
          onChangeTwoPlusTwo={(value) => setTwoPlusTwo(value)}
          validate={validateTwoPlusTwo}
        />
        <ReasonForSparing
          reasonForSparing={reasonForSparing}
          onChangeReasonForSparing={(value) => setReasonForSparing(value)}
          validate={validateReasonForSparing}
        />

        <button type="submit">Submit</button>
      </form>
      {displayFormInput && (
        <>
          <DisplayFormInput
            speciesName={speciesName}
            planetName={planetName}
            beingsNumber={beingsNumber}
            displayFormInput={displayFormInput}
            reasonsForSparing={reasonForSparing}
          />
          <button onClick={handleFormReset}>Reset Form</button>
        </>
      )}
    </section>
  );
};

export default W12MForm;
