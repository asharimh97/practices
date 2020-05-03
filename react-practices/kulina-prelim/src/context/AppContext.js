import { createContext } from "react";

/**
 * App context will be structured as below
 * {
 *    timeslot: "lunch" || "dinner",
 *    currentDate: moment object,
 *    cart: []
 * }
 */

const AppContext = createContext({});

export default AppContext;