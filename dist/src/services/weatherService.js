import { faker } from '@faker-js/faker';
import { storeWeatherData } from "../helpers/helpers.js";
export const generateLondonWeatherData = () => {
    // Generate random weather data
    const generatedWeatherData = {
        city: "London",
        temperature: faker.number.int({ min: -15, max: 30 }),
        humidity: faker.number.int({ min: 79, max: 86 }),
        wind: faker.number.int({ min: 2, max: 78 }),
        rain: faker.number.int({ min: 65, max: 75 }),
    };
    storeWeatherData(generatedWeatherData).catch(console.error);
    // Return weather data
    return generatedWeatherData;
};
export const generateDublinWeatherData = () => {
    // Generate random weather data
    const generatedWeatherData = {
        city: "Dublin",
        temperature: faker.number.int({ min: -15, max: 30 }),
        humidity: faker.number.int({ min: 79, max: 86 }),
        wind: faker.number.int({ min: 2, max: 78 }),
        rain: faker.number.int({ min: 65, max: 75 }),
    };
    storeWeatherData(generatedWeatherData).catch(console.error);
    // Return weather data
    return generatedWeatherData;
};
export const generateParisWeatherData = () => {
    const generatedWeatherData = {
        city: "Paris",
        temperature: faker.number.int({ min: -10, max: 40 }),
        humidity: faker.number.int({ min: 19, max: 96 }),
        wind: faker.number.int({ min: 1, max: 28 }),
        rain: faker.number.int({ min: 15, max: 125 }),
    };
    storeWeatherData(generatedWeatherData).catch(console.error);
    // Return weather data
    return generatedWeatherData;
};
export const generatePragueWeatherData = () => {
    const generatedWeatherData = {
        city: "Prague",
        temperature: faker.number.int({ min: -1, max: 30 }),
        humidity: faker.number.int({ min: 21, max: 106 }),
        wind: faker.number.int({ min: 11, max: 48 }),
        rain: faker.number.int({ min: 15, max: 221 }),
    };
    storeWeatherData(generatedWeatherData).catch(console.error);
    // Return weather data
    return generatedWeatherData;
};
export const generateWeatherData = () => {
    // Generate random weather data
    const generatedWeatherData = {
        city: "",
        temperature: faker.number.int({ min: -1, max: 30 }),
        humidity: faker.number.int({ min: 21, max: 106 }),
        wind: faker.number.int({ min: 11, max: 48 }),
        rain: faker.number.int({ min: 15, max: 221 }),
    };
    // Return weather data
    return generatedWeatherData;
};
//# sourceMappingURL=weatherService.js.map