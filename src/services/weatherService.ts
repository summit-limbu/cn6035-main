import { faker } from '@faker-js/faker';

export const generateLondonWeatherData = (): WeatherData => {
  // Generate random weather data
  const generatedWeatherData = {
    temperature: faker.number.int({ min: -15, max: 30 }),
    humidity: faker.number.int({ min: 79, max: 86 }),
    wind: faker.number.int({ min: 2, max: 78 }),
    rain: faker.number.int({ min: 65, max: 75 }),
  };

  // Return weather data
  return generatedWeatherData;
};

export const generateDublinWeatherData = (): WeatherData => {
  // Generate random weather data
  const generatedWeatherData: WeatherData = {
    temperature: faker.number.int({ min: -15, max: 30 }),
    humidity: faker.number.int({ min: 79, max: 86 }),
    wind: faker.number.int({ min: 2, max: 78 }),
    rain: faker.number.int({ min: 65, max: 75 }),
  };

  // Return weather data
  return generatedWeatherData;
};

export const generateParisWeatherData = (): WeatherData => {
  const generatedWeatherData = {
    temperature: faker.number.int({ min: -10, max: 40 }),
    humidity: faker.number.int({ min: 19, max: 96 }),
    wind: faker.number.int({ min: 1, max: 28 }),
    rain: faker.number.int({ min: 15, max: 125 }),
  };

  // Return weather data
  return generatedWeatherData;
};

export const generatePragueWeatherData = (): WeatherData => {
  const generatedWeatherData: WeatherData = {
    temperature: faker.number.int({ min: -1, max: 30 }),
    humidity: faker.number.int({ min: 21, max: 106 }),
    wind: faker.number.int({ min: 11, max: 48 }),
    rain: faker.number.int({ min: 15, max: 221 }),
  };

  // Return weather data
  return generatedWeatherData;
};

export const generateWeatherData = (): WeatherData => {
  // Generate random weather data
  const generatedWeatherData = {
    temperature: faker.number.int({ min: -1, max: 30 }),
    humidity: faker.number.int({ min: 21, max: 106 }),
    wind: faker.number.int({ min: 11, max: 48 }),
    rain: faker.number.int({ min: 15, max: 221 }),
  };

  // Return weather data
  return generatedWeatherData;
};
