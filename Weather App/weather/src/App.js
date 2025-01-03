import WeatherDisplay from "./components/WeatherDisplay";
import Places from "./components/Places";
import { useState } from "react";

function App() {
  const PLACES = [
    { name: "Palo Alto", zip: "94303" },
    { name: "San Jose", zip: "94088" },
    { name: "Santa Cruz", zip: "95062" },
    { name: "Honolulu", zip: "96803" },
  ];

  const [activePlace, setActivePlace] = useState(PLACES[0]);

  function handleClick(index) {
    setActivePlace(PLACES[index]);
  }

  return (
    <div className="App">
      <Places place={activePlace} handleClick={handleClick} PLACES={PLACES} />
      <WeatherDisplay place={activePlace.name} zip={activePlace.zip} />
    </div>
  );
}

export default App;
