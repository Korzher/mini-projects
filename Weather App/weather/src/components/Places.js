export default function Places(props) {
  const { handleClick, PLACES } = props;

  return (
    <div className="displayPlaces">
      {PLACES.map((place, index) => (
        <button key={index} onClick={() => handleClick(index)}>
          {place.name}
        </button>
      ))}
    </div>
  );
}
