export const convertNumberToPixel = (number: any) => {
  if (isNaN(number)) return number;

  return `${number}px`;
};

export const handleErrorImage = (e: any) => {
  e.target.onerror = null;
  e.target.src = "/image-placeholder.jpg";
};

export const generateRandomNumber = (range: number) => {
  return Math.round(Math.random() * range);
};
