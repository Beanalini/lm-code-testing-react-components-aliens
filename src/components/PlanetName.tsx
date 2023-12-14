import FormErrorMessage from "./FormErrorMessage";
interface PlanetNameProps {
  planetName: string;
  onChangePlanetName: (value: string) => void;
  validate: (validate: string) => Array<string>;
}
const PlanetName: React.FC<PlanetNameProps> = ({
  planetName,
  onChangePlanetName,
  validate,
}) => {
  return (
    <>
      <div>
        <label htmlFor="planetName">Planet Name</label>
        <input
          id="planetName"
          type="text"
          value={planetName}
          onChange={(e) => onChangePlanetName(e.target.value)}
        />
      </div>
      <FormErrorMessage errMessage={validate(planetName)} />
    </>
  );
};

export default PlanetName;
