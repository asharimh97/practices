// first search function
function search(term: string, tags?: string[]): Promise<any>;

// second search function
function search(term: string, callback: (results: any[]) => void, tags?: string[]): void;

// real implementation
function search(
  term: string,
  p2?: unknown,
  p3?: string[]
) {
  console.log("Lorem ipsum")
}

search("lorem");

type SearchOverloadFn = {
  (
    term: string,
    tags?: string[] | undefined,
  ): Promise<any>;

  (
    term: string,
    callback: (results: any[]) => void,
    tags?: string[] | undefined,
  ): void;
};

// @ts-ignore
// should add this little piece of shit so `searchWithOverload` doesn't give error
// that Promise couldn't be given `void`
const searchWithOverload: SearchOverloadFn = (
  term: string,
  p2?: string[] | ((result: any[]) => void),
  p3?: string[]
) => {
  console.log("hohoho")
}

searchWithOverload("lorem", []);