import { useState } from "react";
import W12MHeader from "./W12MHeader";
import SpeciesName from "./species-name";
import PlanetName from "./planet-name";
import BeingsNumber from "./beings-number";

const W12MForm = () => {
  const [speciesName, setSpeciesName] = useState<string>("humans");
  const [planetName, setPlanetName] = useState<string>("Mars");
  const [beingsNumber, setBeingsNumber] = useState<string>("10");

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
    </section>
  );
};

export default W12MForm;
