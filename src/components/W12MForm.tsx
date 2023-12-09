import { useState } from "react";
import W12MHeader from "./W12MHeader";
import SpeciesName from "./SpeciesName";
import PlanetName from "./PlanetName";
import BeingsNumber from "./BeingsNumber";
import TwoPlusTwo from "./TwoPlusTwo";
import ReasonForSparing from "./ReasonForSparing";

const W12MForm = () => {
  const [speciesName, setSpeciesName] = useState<string>("humans");
  const [planetName, setPlanetName] = useState<string>("Mars");
  const [beingsNumber, setBeingsNumber] = useState<string>("10");
  const [result, setIQTestResult] = useState<string>("4");
  const [reasonForSparing, setReasonForSparing] = useState<string>("");

  return (
    <section className="w12MForm">
      <W12MHeader />
      {/* REST OF FORM GOES HERE */}
      <SpeciesName
        speciesName={speciesName}
        onChangeSpeciesName={(value) => setSpeciesName(value)}
      />

      <PlanetName
        planetName={planetName}
        onChangePlanetName={(value) => setPlanetName(value)}
      />
      <BeingsNumber
        beingsNumber={beingsNumber}
        onChangeBeingsNumber={(value) => setBeingsNumber(value)}
      />
      <TwoPlusTwo
        result={result}
        onChangeIQTest={(value) => setIQTestResult(value)}
      />
      <ReasonForSparing
        reasonForSparing={reasonForSparing}
        onChangeReasonForSparing={(value) => setReasonForSparing(value)}
      />
    </section>
  );
};

export default W12MForm;
