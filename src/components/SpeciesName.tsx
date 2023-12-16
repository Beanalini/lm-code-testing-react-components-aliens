import FormErrorMessage from "./FormErrorMessage";

interface SpeciesNameProps {
  speciesName: string;
  onChangeSpeciesName: (value: string) => void;
  validate: (validate: string) => Array<string>;
}
const SpeciesName: React.FC<SpeciesNameProps> = ({
  speciesName,
  onChangeSpeciesName,
  validate,
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

      <FormErrorMessage errMessage={validate(speciesName)} />
    </>
  );
};

export default SpeciesName;
