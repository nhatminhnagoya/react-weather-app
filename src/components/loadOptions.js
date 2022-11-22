import { GEO_API_URL, geoApiOptions } from "../api";

async function loadOptions(inputValue) {
  try {
    const response = await fetch(
      `${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
      geoApiOptions
    );
    const responseJson = await response.json();
    return {
      options: responseJson.data.map((city) => {
        return {
          value: `${city.latitude} ${city.longitude}`,
          label: `${city.name}, ${city.countryCode}`,
        };
      }),
    };
  } catch (err) {
    return console.error(err);
  }
}

export default loadOptions;
