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

export const convertHexToRGBA = (hexCode: string, alpha: number | string) => {
  const mappedHex = hexCode.replace("#", "").match(/.{1,2}/g);
  const mappedRgb = mappedHex?.map(hex => parseInt(hex, 16));

  let rgbaResult = `rgba(${mappedRgb?.join(",")}, ${alpha})`;

  return rgbaResult;
};
