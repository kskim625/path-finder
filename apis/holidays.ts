const getHolidays = async (countryCode: string, yearInfo: string) => {
  const BASE_URL: string = 'https://calendarific.com/api/v2';
  const API_KEY: string = '?api_key=e60a2164a851eb115ebc09abfbff66237197387c';
  const response = await fetch(BASE_URL + API_KEY + countryCode + yearInfo);
  return await response.json();
};

export default getHolidays;
