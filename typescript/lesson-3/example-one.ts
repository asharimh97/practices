// First lesson: 
// function isAvailable<FormatList> (
//   obj: FormatList,
//   key: string | number | symbol
// ): key is keyof FormatList{
//   return key in obj
// }

// Second lesson: 
// Only accept generic as object, everything else will be returned as error
// function isAvailable<FormatList extends object> (
//   obj: FormatList,
//   key: string | number | symbol
// ): key is keyof FormatList{
//   return key in obj
// }

type URLList = {
  [key: string]: URL
}

// function isAvailable<FormatList extends URLList> (
//   obj: FormatList,
//   key: string | number | symbol
// ): key is keyof FormatList{
//   return key in obj
// }

async function isAvailable<FormatList extends URLList> (
  obj: FormatList,
  key: keyof FormatList
) {
  const data = await fetch(obj[key].href);
  return {
    format: key,
    loaded: data.status === 200
  }
}

console.log(isAvailable('A string', 'length'));
console.log(isAvailable(123123, 'parseInt'));
console.log(isAvailable({ name: "Ashari" }, 'key'));

// const formats: URLList = {
//   format: new URL.createObjectURL({}),
//   format360: URL.createObjectURL({}),
// }

type VideoFormatUrls = {
  formats: URL,
  format360: URL,
  format720: URL
  format1080: URL
};

type HD = Pick<VideoFormatUrls, 'format360' | 'format720'>

type Split<Obj> = {
  [P in keyof Obj]: Record<P, Obj[P]>
}[keyof Obj]

type AvailableFormats = Split<VideoFormatUrls>

declare const formats: VideoFormatUrls;

isAvailable(formats, 'formats');