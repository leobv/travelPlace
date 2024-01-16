import axios from 'axios';

const boundaryURL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';
const searchURL = 'https://travel-advisor.p.rapidapi.com/locations/v2/search';

const rapidAPIKey = 'd1f98fe2eemsh613f447e55a7406p121791jsn128c6bd8333d';
const rapidAPIHost = 'travel-advisor.p.rapidapi.com';

export const getPlacesData = async (sw, ne) => {
  try {
    const { data: { data } } = await axios.get(boundaryURL, {
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
      },
      headers: {
        'X-RapidAPI-Key': rapidAPIKey,
        'X-RapidAPI-Host': rapidAPIHost,
      },
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getSearchData = async (query) => {
  try {
    const response = await axios.post(searchURL, {
      query,
      updateToken: '',
    }, {
      params: {
        currency: 'USD',
        units: 'km',
        lang: 'en_US',
      },
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': rapidAPIKey,
        'X-RapidAPI-Host': rapidAPIHost,
      },
    });

    return response.data;
  } catch (error) {
    console.error(error);
  }
};
