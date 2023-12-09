import { useState } from "react";
import W12MHeader from "./W12MHeader";
import SpeciesName from "./species-name";

const W12MForm = () => {
  const [speciesName, setSpeciesName] = useState<string>("plants");
  return (
    <section className="w12MForm">
      <W12MHeader />
      {/* REST OF FORM GOES HERE */}
      <SpeciesName
        speciesName={speciesName}
        onChangeSpeciesName={(value) => setSpeciesName(value)}
      />
    </section>
  );
};

export default W12MForm;
