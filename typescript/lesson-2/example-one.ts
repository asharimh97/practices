type Result = {
  title: string,
  url: string,
  abstract: string,
}

// declare function search(
//   query: string,
//   tags?: string[]
// ): any;

search("lorem");

function search(query: string, tags?: string[]): Promise<Result[]> {
  let queryString = `?query=${query}`;

  if (tags && tags.length) {
    queryString += `&tags${tags.join}`
  }

  return fetch(`/search/${queryString}`)
    .then(res => res.json());
}

type SearchFn = typeof search;