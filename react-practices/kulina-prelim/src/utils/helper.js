import { isWeekend, addBusinessDays } from "date-fns";

export const generateStartDay = () => {
  let today = new Date();

  if (isWeekend(today)) {
    today = addBusinessDays(today, 1);
  }

  return today;
};