const API_ENDPOINT = "https://crio-location-selector.onrender.com";

export const fetchCountry = async () => {
  try {
    const res = await fetch(`${API_ENDPOINT}/countries`);
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();

    if (!Array.isArray(data)) {
      throw new Error("Expected an array of countries");
    }
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const fetchState = async (country) => {
  try {
    const res = await fetch(`${API_ENDPOINT}/country=${country}/states`);
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();

    if (!Array.isArray(data)) {
      throw new Error("Expected an array of states");
    }
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
export const fetchCity = async (country, state) => {
  try {
    const res = await fetch(
      `${API_ENDPOINT}/country=${country}/state=${state}/cities`
    );
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();

    if (!Array.isArray(data)) {
      throw new Error("Expected an array of city");
    }
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
