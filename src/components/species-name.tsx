import { useState } from "react";

interface SpeciesNameProps {
  speciesName: string;
  onChangeSpeciesName: (value: string) => void;
}
const SpeciesName: React.FC<SpeciesNameProps> = ({
  speciesName,
  onChangeSpeciesName,
}) => {
  return (
    <>
      <div>
        <label htmlFor="speciesName">Species Name</label>
        <input
          id="speciesName"
          type="text"
          value={speciesName}
          onChange={(e) => onChangeSpeciesName(e.target.value)}
        />
      </div>
    </>
  );
};

export default SpeciesName;
