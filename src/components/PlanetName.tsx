interface PlanetNameProps {
  planetName: string;
  onChangePlanetName: (value: string) => void;
}
const PlanetName: React.FC<PlanetNameProps> = ({
  planetName,
  onChangePlanetName,
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
    </>
  );
};

export default PlanetName;
