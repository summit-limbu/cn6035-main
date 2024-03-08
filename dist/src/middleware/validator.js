import { param } from "express-validator";
/**
 * Validates the city name param
 * @returns {ValidationChain} - Express validator validation chain
 * @example
 * router.get(
 *  "/:city",
 * validateCityName,
 * getWeatherData
 * );
 */
export const validateCityName = param("city")
    .isString()
    .isIn(["london", "dublin", "paris", "prague"]) // We will use the isIn method to check if the city param is either london or dublin
    // We will use the withMessage method to set a custom error message
    .withMessage("City name must be either london or dublin");
//# sourceMappingURL=validator.js.map