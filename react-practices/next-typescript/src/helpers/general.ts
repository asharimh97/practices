export const convertNumberToPixel = (number: any) => {
  if (isNaN(number)) return number;

  return `${number}px`;
};

export const handleErrorImage = (e: any) => {
  e.target.onerror = null;
  e.target.src = "/image-placeholder.jpg";
};
